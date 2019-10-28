<template>
  <v-app>
    <Sidebar v-if="isAuthorized"></Sidebar>
    <v-content>
      <v-container :class="{ 'fill-height': !isAuthorized }" fluid>
        <Header v-if="isAuthorized" :text="page"></Header>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

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
    ...mapGetters(['isAuthorized']),
  },
  watch: {
    $route(to) {
      this.page = to.meta.title;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
