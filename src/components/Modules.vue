<template>
  <div class="modules">
    <v-card class="modules_content">
      <p class="modules_title">Все модули</p>
      <v-simple-table>
        <template>
          <thead>
            <tr>
              <th class="text-left">Название модуля</th>
              <th class="text-left">Автор</th>
              <th class="text-left">Дата добавления</th>
              <th class="text-left">Статус</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <ModulesRow v-for="(module, i) in modules" :module="module" :key="i" />
          </tbody>
        </template>
      </v-simple-table>
      <v-pagination circle length="10" total-visible="5"></v-pagination>
    </v-card>
    <div>
      <v-btn large dark class="modules_add">Добавить модуль</v-btn>
    </div>
  </div>
</template>

<script>
import ModulesRow from './ModulesRow.vue';

export default {
  components: {
    ModulesRow,
  },

  data() {
    return {
      modules: [
        {
          name: '🏢 ❤️ Жизнь в офисе',
          duration: '7 дней',
          tag: 'Общий',
          author: {
            name: 'Роман Жаворонков',
            avatar: 'https://source.unsplash.com/random/100x100/?user',
          },
          datetime: {
            date: 'May 26, 2019',
            time: '6:30 PM',
          },
          status: 'В разработке',
        },
        {
          name: 'Работа с задачами',
          duration: '7 дней',
          tag: 'Общий',
          author: {
            name: 'Мария Крывда',
            avatar: 'https://source.unsplash.com/random/100x100/?user',
          },
          datetime: {
            date: 'May 26, 2019',
            time: '6:30 PM',
          },
          status: 'В разработке',
        },
        {
          name: 'Swagger',
          duration: '1 день',
          tag: 'Общий',
          author: {
            name: 'Юлия Жукова',
            avatar: 'https://source.unsplash.com/random/100x100/?user',
          },
          datetime: {
            date: 'May 26, 2019',
            time: '6:30 PM',
          },
          status: 'В разработке',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.modules

  &_content
    padding 20px

  &_add
    margin 20px 0
    float right

  &_title
    font-weight bold
    font-size 19px
</style>
