import dataApi from "../../../apis/data";
import * as types from "./constants";
import { types as authTypes } from "../auth";

export default {
  async [types.A_REQUEST_CONTACT_COACH](context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    try {
      const response = await dataApi.post(
        `/requests/${payload.coachId}.json`,
        newRequest
      );

      const { data } = response;
      newRequest.id = data.name;
      newRequest.coachId = payload.coachId;
      context.commit(types.M_REQUEST_ADD, newRequest);
    } catch (error) {
      throw new Error(
        error.response.data.error.message || "Failed to send the request!"
      );
    }
  },
  async [types.A_REQUEST_FETCH_REQUESTS](context) {
    const coachId = context.rootGetters[authTypes.G_AUTH_USERID];
    const token = context.rootGetters[authTypes.G_AUTH_TOKEN];

    try {
      const response = await dataApi.get(
        `/requests/${coachId}.json?auth=` + token
      );

      const { data } = response;
      const requests = [];
      for (const key in data) {
        const request = {
          id: key,
          coachId: coachId,
          userEmail: data[key].userEmail,
          message: data[key].message,
        };
        requests.push(request);
      }

      context.commit(types.M_REQUEST_SET, requests);
    } catch (error) {
      throw new Error(
        error.response.data.error.message || "Failed to fetch requests!"
      );
    }
  },
};
