<template>
  <v-container fluid id="header">
    <v-row align="center" justify="space-between">
      <h1 v-text="title"></h1>
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

<style scoped>
#header {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
