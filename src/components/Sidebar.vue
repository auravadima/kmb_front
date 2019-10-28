<template>
  <v-navigation-drawer permanent fixed dark app class="sidebar">
    <v-row justify="space-around" align="center">
      <v-avatar size="80px" color="primary">
        <img src="../../public/images/bot.jpg" alt="alt" />
      </v-avatar>
      <h1>{{ botName }}</h1>
    </v-row>
    <v-spacer></v-spacer>
    <v-divider light class="sidebar_divider"></v-divider>
    <v-list>
      <v-list-item-group
        active-class="sidebar_list_active"
        v-model="index"
        class="sidebar_list"
        mandatory
      >
        <template v-for="(item, i) in sidebarRoutes">
          <router-link :to="item.href" :key="i">
            <v-list-item>
              {{ item.name }}
            </v-list-item>
          </router-link>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'sidebar',
  computed: {
    ...mapState(['botName', 'sidebarRoutes']),
    index: {
      get() {
        return this.$route.meta.index;
      },
      set() {},
    },
  },
};
</script>

<style lang="stylus" scoped>
.sidebar
  color: white
  padding-top 5px

  &_divider
    margin-top 10px
    margin-bottom 10px

  &_list
    &_active
      color: white !important;
      font-weight: 500;
      background-color: grey;

      &:before
        width 5px

a
  text-decoration none
</style>
