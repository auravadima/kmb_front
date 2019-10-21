<template>
  <v-app>
    <Sidebar v-if="authorized"></Sidebar>
    <v-content>
      <v-container fluid>
        <Header :text="page"></Header>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
  },
  mounted() {
    this.page = this.$route.meta.title;
  },
  data: () => ({
    page: '',
  }),
  computed: {
    authorized() {
      return this.$cookies.get('token') === 'bla bla';
    },
  },
  watch: {
    $route(to) {
      this.page = to.meta.title;
    },
  },
};
</script>
