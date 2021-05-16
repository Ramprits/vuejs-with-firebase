import { login } from "@/services/auth";
export default {
  async signIn({ commit }, payload) {
    try {
      commit("loading", true);
      const { email, password } = payload;
      const { user, error } = await login(email, password);
      if (user) {
        commit("setUser", user);
      } else if (error !== undefined) {
        commit("error", error.message);
      }
    } catch (error) {
      console.error(error);
    }
  },
  async signUp({ commit }, payload) {
    try {
      console.log("login");
    } catch (error) {
      console.error(error);
    }
  },
  async signOut({ commit }, payload) {
    try {
      console.log("login");
    } catch (error) {
      console.error(error);
    }
  }
};
