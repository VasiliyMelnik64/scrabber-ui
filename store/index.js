import Vue from "vue";
import Vuex from "vuex";

import { getCommonData } from "../services/api/dataApi";

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: {
      data: [],
      error: "",
    },
    mutations: {
      setData(state, payload) {
        state.data = payload;
      },
      setError(state, payload) {
        state.error = payload;
      },
    },
    actions: {
      async requestData(state, payload) {
        try {
          const data = await getCommonData(payload);

          state.commit("setData", data);
        } catch (e) {
          state.commit("setError", e.message);
        }
      },
    },
    modules: [],
    getters: {
      getData(state) {
        return state.data;
      },
      getError(state) {
        return state.error;
      },
    },
  });
