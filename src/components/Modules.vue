<template>
  <div class="modules">
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
  &_title
    font-weight bold
    font-size 19px
</style>
