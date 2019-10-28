import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import { router } from './testData/testRouter';
import Header from '@/components/Header.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
Vue.use(Vuetify);

describe('Header.vue', () => {
  let wrapper;

  beforeAll(() => {
    const vuetify = new Vuetify();
    window.$cookies = {
      get: () => 'test',
    };
    wrapper = shallowMount(Header, {
      localVue,
      vuetify,
      router,
    });
  });

  it('title is right', () => {
    router.push('/results');
    expect(wrapper.find('.header_title').text()).toBe('Результаты');
  });
});
