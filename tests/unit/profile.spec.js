import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Profile from '@/components/Profile.vue';

const localVue = createLocalVue();
Vue.use(Vuetify);

describe('Profile.vue', () => {
  let wrapper;
  let config;

  beforeAll(() => {
    const vuetify = new Vuetify();
    const $store = {
      commit: jest.fn(),
    };

    const $cookies = {
      remove: jest.fn(),
    };

    const $router = {
      push: jest.fn(),
    };

    config = {
      localVue,
      vuetify,
      mocks: {
        $router,
        $cookies,
        $store,
      },
    };
  });

  beforeEach(() => {
    wrapper = shallowMount(Profile, config);
  });

  it('should logout after click', () => {
    wrapper.find('.profile_content_logout').trigger('click');

    expect(wrapper.vm.$cookies.remove).toBeCalledWith('token');
    expect(wrapper.vm.$store.commit).toBeCalledWith('logout');
    expect(wrapper.vm.$router.push).toBeCalledWith('/');
  });
});
