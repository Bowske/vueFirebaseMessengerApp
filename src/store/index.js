import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userData: null,
  },
  mutations: {
    setUserData(state, payload) {
      state.userData = payload;
    },
  },
  actions: {},
  modules: {},
});
