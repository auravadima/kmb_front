import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Sidebar from '@/components/Sidebar.vue';
import { routes, router } from './testData/testRouter';
import state from './testData/testState';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);
Vue.use(Vuetify);

describe('Sidebar.vue', () => {
  let wrapper;
  let vuetify;
  let store;

  beforeAll(() => {
    vuetify = new Vuetify();
    const $cookies = {
      get: () => 'test',
    };
    window.$cookies = $cookies;
    store = new Vuex.Store({
      state,
    });
  });

  beforeEach(() => {
    wrapper = mount(Sidebar, {
      localVue,
      vuetify,
      store,
      router,
      mocks: {
        $cookies,
      },
    });
  });

  it('sidebar has right count of links', () => {
    const lis = wrapper.find('#sidebar_list').findAll('.v-list-item');
    expect(lis.lenght).toBe(routes.lenght);
  });

  it('sidebar has right active links', () => {
    const lis = wrapper.find('#sidebar_list').findAll('.v-list-item');
    lis.at(1).trigger('click');
    expect(wrapper.find('.active').text()).toBe('Планы обучения');
  });

  it('computed index is right', () => {
    router.push('/plans');
    expect(wrapper.vm.index).toBe(1);
  });

  it('active list item is right', () => {
    router.push('/results');
    expect(wrapper.find('.active').text()).toBe('Результаты');
  });
});
