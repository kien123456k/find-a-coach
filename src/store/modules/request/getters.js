import * as types from "./constants";
import { types as authTypes } from "../auth";

export default {
  [types.G_REQUEST_REQUESTS](state, _, _2, rootGetters) {
    const coachId = rootGetters[authTypes.G_AUTH_USERID];
    return state.requests.filter((req) => req.coachId === coachId);
  },
  [types.G_REQUEST_HAS_REQUESTS](_, getters) {
    return (
      getters[types.G_REQUEST_REQUESTS] &&
      getters[types.G_REQUEST_REQUESTS].length > 0
    );
  },
};
