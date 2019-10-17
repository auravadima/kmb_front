<template>
    <v-navigation-drawer permanent
    fixed dark app id="sidebar"
    >
      <v-row justify="space-around" align="center">
        <v-avatar
          size="80px"
          color="primary"
        >
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="alt">
        </v-avatar>
        <h1>{{ botName }}</h1>
      </v-row>
      <v-spacer></v-spacer>
      <v-divider light class="divider"></v-divider>
      <v-list>
        <v-list-item-group v-model="index">
          <v-list-item
          v-for="(item, i) in listElems"
          :key="i"
          >
          {{ item.name }}
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'sidebar',
  data: () => ({
    botName: 'KMB Bot',
    listElems: [
      {
        name: 'First',
        href: 'bla',
      },
      {
        name: 'Second',
        href: 'bla',
      },
      {
        name: 'Third',
        href: 'bla',
      },
    ],
    index: 1,
  }),
};
</script>

<style>
#sidebar {
  color: white;
  padding-top: 5px;
}

.divider {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
