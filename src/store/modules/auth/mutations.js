export default {
  setUser: (state, payload) => {
    state.currentUser = payload.user;
  },
  error: (state, payload) => {
    state.error = payload;
  },
  loading: (state, payload) => {
    state.login = payload;
  }
};
