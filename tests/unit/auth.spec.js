import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Auth from '@/components/Auth.vue';

const localVue = createLocalVue();
Vue.use(Vuetify);

describe('Auth.vue', () => {
  let wrapper;
  let config;
  let vuetify;

  beforeAll(() => {
    vuetify = new Vuetify();
  });

  beforeEach(() => {
    const $router = {
      push: jest.fn(),
    };
    const $cookies = {
      get: () => null,
      set: jest.fn(),
    };
    const $store = {
      commit: jest.fn(),
    };

    window.$cookies = $cookies;
    config = {
      localVue,
      vuetify,
      mocks: {
        $router,
        $cookies,
        $store,
      },
    };

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should check auth and redirect if authorized', () => {
    config.mocks.$cookies.get = () => 'test';
    wrapper = shallowMount(Auth, config);
    expect(wrapper.vm.$store.commit).toBeCalledWith('authorize', { token: 'test' });
    expect(wrapper.vm.$router.push).toBeCalledWith('/modules');
  });

  it('should redirect if authorized', () => {
    config.mocks.$cookies.get = () => 'test';
    wrapper = shallowMount(Auth, config);
    expect(wrapper.vm.$router.push).toBeCalledWith('/modules');
  });

  it('should not redirect if not authorized', () => {
    wrapper = shallowMount(Auth, config);
    expect(wrapper.vm.$router.push).not.toBeCalled();
  });

  it('should save cookie after success login', () => {
    wrapper = shallowMount(Auth, config);
    wrapper.vm.login = 'admin';
    wrapper.vm.password = 'admin';
    wrapper.vm.authorize();
    jest.runAllTimers();
    expect(wrapper.vm.$cookies.set).toBeCalledWith('token', 'test');
  });

  it('should not login with incorrect params', () => {
    wrapper = shallowMount(Auth, config);
    wrapper.vm.login = 'login';
    wrapper.vm.password = 'password';
    wrapper.vm.authorize();
    jest.runAllTimers();
    expect(wrapper.vm.$cookies.set).not.toBeCalled();
  });
});
