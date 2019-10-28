import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Modules from '../../src/components/Modules.vue';

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
      modules: [
        {
          name: '🏢 ❤️ Жизнь в офисе',
          duration: '7 дней',
          tag: 'Общий',
          author: {
            name: 'Роман Жаворонков',
            avatar: 'https://source.unsplash.com/random/100x100/?user',
          },
          datetime: {
            date: 'May 26, 2019',
            time: '6:30 PM',
          },
          status: 'В разработке',
        },
      ],
    });
  });

  beforeEach(() => {
    wrapper = shallowMount(Modules, {
      localVue,
      vuetify,
      mocks: {
        data,
      },
    });
  });

  it('data should contain modules', () => {
    expect(wrapper.vm.data).toBe(data);
  });
});
