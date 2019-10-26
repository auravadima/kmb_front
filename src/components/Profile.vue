<template>
  <div class="profile">
    <v-icon size="30" class="profile_search">search</v-icon>
    <v-divider vertical inset></v-divider>
    <div class="profile_content">
      <p class="profile_content_name">
        Vadim Kovalev
      </p>
      <p @click="logout" class="profile_content_logout">
        Log out
      </p>
    </div>

    <v-avatar class="profile_avatar">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>
  </div>
</template>

<script>
export default {
  name: 'app-profile',
  methods: {
    logout() {
      this.$cookies.remove('token');
      this.$store.commit('logout');
      this.$router.push('/');
    },
  },
};
</script>

<style lang="stylus" scoped>
.profile
  display flex
  align-items center

  &_search
    margin-right 20px
    color #C5C7CD !important

  &_content
    margin  0 25px
    font-weight 600
    line-height 5px

    &_logout
      color #A4A6B3
      margin 0
      text-align end
      cursor pointer

  &_avatar
    align-self baseline
</style>
