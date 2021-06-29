import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import * as types from "./constants";

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  mutations,
  actions,
  getters,
};

export { types };
