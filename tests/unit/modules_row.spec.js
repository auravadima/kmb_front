import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import ModulesRowMenu from '../../src/components/ModulesRowMenu.vue';

describe('Modules.vue', () => {
  let localVue;
  let wrapper;
  let vuetify;
  let data;

  beforeAll(() => {
    localVue = createLocalVue();
    Vue.use(Vuetify);
    vuetify = new Vuetify();
    data = () => ({
      list: ['Просмотр', 'Реактировать', 'Запустить демо', 'Сделать копию', 'В архив'],
    });
  });

  beforeEach(() => {
    wrapper = shallowMount(ModulesRowMenu, {
      localVue,
      vuetify,
      mocks: {
        data,
      },
    });
  });

  it('data should contain menu elems', () => {
    expect(wrapper.vm.data).toBe(data);
  });
});
