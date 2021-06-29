import * as types from "./constants";

export default {
  [types.M_AUTH_SET_USER](state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  [types.M_AUTH_SET_AUTO_LOGOUT](state) {
    state.didAutoLogout = true;
  },
};
