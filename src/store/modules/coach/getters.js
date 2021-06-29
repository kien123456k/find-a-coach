import * as types from "./constants";
import { types as authTypes } from "../auth";

export default {
  [types.G_COACH_COACHES](state) {
    return state.coaches;
  },
  [types.G_COACH_HAS_COACHES](state) {
    return state.coaches && state.coaches.length > 0;
  },
  [types.G_COACH_IS_COACH](_, getters, _2, rootGetters) {
    const coaches = getters[types.G_COACH_COACHES];
    const userId = rootGetters[authTypes.G_AUTH_USERID];
    return coaches.some((coach) => coach.id === userId);
  },
  [types.G_COACH_SHOULD_UPDATE](state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }

    const currentTimestamp = new Date().getTime();
    return (currentTimestamp - lastFetch) / 1000 > 60;
  },
};
