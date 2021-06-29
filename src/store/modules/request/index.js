import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import * as types from "./constants";

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations,
  actions,
  getters,
};

export { types };
