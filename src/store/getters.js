export default {
  isAuthorized: state => state.token === 'test' || window.$cookies.get('token') === 'test',
};
