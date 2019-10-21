<template>
  <v-navigation-drawer permanent fixed dark app id="sidebar">
    <v-row justify="space-around" align="center">
      <v-avatar size="80px" color="primary">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="alt" />
      </v-avatar>
      <h1>{{ botName }}</h1>
    </v-row>
    <v-spacer></v-spacer>
    <v-divider light class="divider"></v-divider>
    <v-list>
      <v-list-item-group v-model="index" active-class="active" mandatory>
        <template v-for="(item, i) in listElems">
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
export default {
  name: 'sidebar',
  data: () => ({
    botName: 'KMB Bot',
    listElems: [
      {
        name: 'Модули',
        href: '/modules',
      },
      {
        name: 'Планы обучения',
        href: '/plans',
      },
      {
        name: 'Результаты',
        href: '/results',
      },
      {
        name: 'Пользователи',
        href: '/users',
      },
    ],
    index: 0,
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

a {
  text-decoration: none;
}

.active {
  color: white !important;
  font-weight: 500;
  background-color: grey;
}

.active::before {
  width: 5px;
}
</style>
