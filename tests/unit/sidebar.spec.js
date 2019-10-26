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
  let config;

  beforeAll(() => {
    const vuetify = new Vuetify();
    const $cookies = {
      get: () => 'test',
    };
    window.$cookies = $cookies;
    const store = new Vuex.Store({
      state,
    });

    config = {
      localVue,
      vuetify,
      store,
      router,
      mocks: {
        $cookies,
      },
    };
  });

  beforeEach(() => {
    wrapper = mount(Sidebar, config);
  });

  it('sidebar has right count of links', () => {
    const lis = wrapper.find('.sidebar_list').findAll('.v-list-item');
    expect(lis.lenght).toBe(routes.lenght);
  });

  it('sidebar has right active links', async () => {
    const lis = wrapper.find('.sidebar_list').findAll('.v-list-item');
    lis.at(2).trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.sidebar_list_active').text()).toBe('Результаты');
  });

  it('computed index is right', () => {
    router.push('/results');
    expect(wrapper.vm.index).toBe(2);
    expect(wrapper.find('.sidebar_list_active').text()).toBe('Результаты');
  });
});
