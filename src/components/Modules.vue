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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in modules" :key="i">
            <td>
              <div>
                <p v-text="item.name"></p>
                <p v-text="item.duration"></p>
                <p v-text="item.tag"></p>
              </div>
            </td>
            <td>
              <div>
                <v-avatar>
                  <img :src="item.author.avatar" alt="User avatar" />
                </v-avatar>
                <span>{{ item.author.name }}</span>
              </div>
            </td>
            <td>
              <div>
                <p v-text="item.datetime.date"></p>
                <p v-text="item.datetime.time"></p>
              </div>
            </td>
            <td>
              <div>
                <p v-text="item.status"></p>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modules: [
        {
          name: 'Name1',
          duration: '7 дней',
          tag: 'Общий',
          author: {
            name: 'UserName1',
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
          },
          datetime: {
            date: 'May 26, 2019',
            time: '6:30 PM',
          },
          status: 'В разработке',
        },
        {
          name: 'Name1',
          duration: '7 дней',
          tag: 'Общий',
          author: {
            name: 'UserName1',
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
          },
          datetime: {
            date: 'May 26, 2019',
            time: '6:30 PM',
          },
          status: 'В разработке',
        },
        {
          name: 'Name1',
          duration: '7 дней',
          tag: 'Общий',
          author: {
            name: 'UserName1',
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
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
