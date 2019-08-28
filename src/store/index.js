import Vue from "vue";
import Vuex from "vuex";

import BoardState from "./state/board";
import BoardActions from "./actions/board";
import BoardMutations from "./mutations/board";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      ...BoardState
    },
    mutations: {
        ...BoardMutations
    },
    actions: {
        ...BoardActions
    }
});
