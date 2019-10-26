export default {
  authorize: (state, payload) => {
    state.token = payload.token;
  },
};
