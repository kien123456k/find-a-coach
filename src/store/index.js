import { createStore } from "vuex";

import coachesModule from "./modules/coach";
import requestsModule from "./modules/request";
import authModule from "./modules/auth";

import { types as authTypes } from "./modules/auth";
import { types as coachTypes } from "./modules/coach";
import { types as requestTypes } from "./modules/request";

const store = createStore({
  modules: {
    coach: coachesModule,
    request: requestsModule,
    auth: authModule,
  },
});

export default store;

export { authTypes, coachTypes, requestTypes };
