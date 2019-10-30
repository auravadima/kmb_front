<template>
  <v-container fluid class="header">
    <v-row align="center" justify="space-between">
      <p class="header_title" v-text="title"></p>
      <Profile />
    </v-row>
  </v-container>
</template>

<script>
import Profile from './Profile.vue';

export default {
  name: 'app-header',
  components: {
    Profile,
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style lang="stylus" scoped>
.header
  padding-left 2%
  padding-right 2%

  &_title
    font-size 19px
    font-weight bold
</style>
