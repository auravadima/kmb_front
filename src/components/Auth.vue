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
                :loading="loading"
                :error="error"
                id="login"
                label="Login"
                name="login"
                type="text"
                v-model="login"
              ></v-text-field>

              <v-text-field
                :loading="loading"
                :error="error"
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
            <v-btn
              large
              :loading="loading"
              :disabled="!login || !password"
              block
              width="100%"
              @click="authorize"
              >Login</v-btn
            >
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
    loading: false,
    error: null,
  }),
  methods: {
    authorize() {
      this.loading = true;
      setTimeout(() => {
        if (this.login === 'admin' && this.password === 'admin') {
          this.$cookies.set('token', 'test');
          this.$router.push('/modules');
        } else {
          this.error = true;
          this.login = '';
          this.password = '';
          setTimeout(() => {
            this.error = false;
          }, 2000);
        }
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
