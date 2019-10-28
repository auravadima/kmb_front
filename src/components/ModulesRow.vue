<template>
  <tr class="module">
    <td>
      <div class="module_div module_info">
        <p v-text="module.name" class="module_info_name"></p>
        <p v-text="module.duration" class="module_info_duration"></p>
        <p v-text="module.tag" class="pill red-light"></p>
      </div>
    </td>
    <td>
      <div class="module_div module_author">
        <v-avatar>
          <img :src="module.author.avatar" alt="User avatar" class="module_author_avatar" />
        </v-avatar>
        <span class="module_author_name">{{ module.author.name }}</span>
      </div>
    </td>
    <td>
      <div class="module_div">
        <p v-text="module.datetime.date"></p>
        <p v-text="module.datetime.time" class="module_date_time"></p>
      </div>
    </td>
    <td>
      <div class="module_div">
        <p v-text="module.status" class="pill red"></p>
      </div>
    </td>
    <td>
      <ModulesRowMenu />
    </td>
  </tr>
</template>

<script>
import ModulesRowMenu from './ModulesRowMenu.vue';

export default {
  components: {
    ModulesRowMenu,
  },
  props: {
    module: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.pill
    display inline-block
    margin-bottom 5px
    padding 7px
    border-radius 10px
    color white

.red-light
  background-color #AD1415

.red
 background-color #F12B2C

.module
  line-height 5px

  &_div
    padding 10px 0 0 0

  &_info
    &_name
      font-weight 600
      margin-top 5px
      margin-bottom 20px

    &_duration
      font-size 12px
      color #C5C7CD
      margin 5px 0

    &_tag
      background-color #AD1415
      display inline-block
      margin-bottom 5px
      padding 7px
      border-radius 10px
      color white

  &_author_name
    margin-left 10px
    font-weight 600

  &_date
    &_time
      color #C5C7CD
</style>
