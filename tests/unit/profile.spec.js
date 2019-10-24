import { shallowMount } from '@vue/test-utils';
import Profile from '@/components/Profile.vue';

describe('Profile.vue', () => {
  it('renders text when created', () => {
    const msg = 'Profile';
    const wrapper = shallowMount(Profile);
    expect(wrapper.text()).toMatch(msg);
  });
});
