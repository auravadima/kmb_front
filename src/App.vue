<template>
  <v-app>
    <sidebar v-if="authorized"></sidebar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  data: () => ({}),
  computed: {
    authorized() {
      return window.$cookies.get('token') === 'bla bla';
    },
  },
};
</script>
