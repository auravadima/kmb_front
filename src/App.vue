<template>
  <div>
    <sidebar v-if="this.$cookies.get('token')"></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  data: () => ({
    login: '',
    password: '',
  }),
};
</script>
