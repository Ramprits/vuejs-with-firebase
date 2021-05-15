import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 10
    };
  },
  mutations: {
    increment: (state, payload) => {
      state.counter = state.counter + payload.value;
    }
  }
});
export default store;
