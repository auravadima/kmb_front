<template>
  <v-container fluid id="header">
    <v-row align="center" justify="space-between">
      <h1>{{ text }}</h1>
      <h1>Profile</h1>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    text: String,
  },
  mounted() {
    if (this.text === '') {
      this.text = window.$router.route.meta.title;
    }
  },
};
</script>

<style scoped>
#header {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
