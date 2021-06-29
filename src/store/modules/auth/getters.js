import * as types from "./constants";

export default {
  [types.G_AUTH_USERID](state) {
    return state.userId;
  },
  [types.G_AUTH_TOKEN](state) {
    return state.token;
  },
  [types.G_AUTH_IS_AUTHENTICATED](state) {
    return !!state.token;
  },
  [types.G_AUTH_DID_AUTO_LOGOUT](state) {
    return state.didAutoLogout;
  },
};
