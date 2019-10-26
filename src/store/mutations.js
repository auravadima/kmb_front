export default {
  authorize: (state, payload) => {
    state.token = payload.token;
  },
  logout: (state) => {
    state.token = null;
  },
};
