import * as types from "./constants";

export default {
  [types.M_REQUEST_ADD](state, payload) {
    state.requests.push(payload);
  },
  [types.M_REQUEST_SET](state, payload) {
    state.requests = payload;
  },
};
