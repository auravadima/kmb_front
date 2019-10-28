<template>
  <v-menu transition="slide-x-transition" bottom right>
    <template v-slot:activator="{ on }">
      <v-icon v-on="on">more_vert</v-icon>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in list" :key="i" @click="11">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      list: ['Просмотр', 'Реактировать', 'Запустить демо', 'Сделать копию', 'В архив'],
    };
  },
};
</script>
