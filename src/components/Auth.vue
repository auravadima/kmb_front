<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                id="login"
                label="Login"
                name="login"
                type="text"
                v-model="login"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn block width="100%" @click="authorize">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'auth-form',
  beforeCreate() {
    if (this.$cookies.get('token') === 'test') {
      this.$router.push('/modules');
    }
  },
  data: () => ({
    login: '',
    password: '',
  }),
  methods: {
    authorize() {
      if (this.login === 'admin' && this.password === 'admin') {
        this.$cookies.set('token', 'test');
        this.$router.push('/modules');
      }
    },
  },
};
</script>
