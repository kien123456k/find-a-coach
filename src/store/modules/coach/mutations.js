import * as types from "./constants";

export default {
  [types.M_COACH_REGISTER](state, payload) {
    state.coaches.push(payload);
  },
  [types.M_COACH_SET](state, payload) {
    state.coaches = payload;
  },
  [types.M_COACH_SET_FETCH_TIMESTAMP](state) {
    state.lastFetch = new Date().getTime();
  },
};
