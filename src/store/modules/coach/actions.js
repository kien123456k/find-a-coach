import dataApi from "../../../apis/data";
import * as types from "./constants";
import { types as authTypes } from "../auth";

export default {
  async [types.A_COACH_REGISTER](context, data) {
    const userId = context.rootGetters[authTypes.G_AUTH_USERID];
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const token = context.rootGetters[authTypes.G_AUTH_TOKEN];
    await dataApi.put(`/coaches/${userId}.json?auth=` + token, coachData);

    context.commit(types.M_COACH_REGISTER, { ...coachData, id: userId });
  },
  async [types.A_COACH_LOAD](context, payload) {
    if (
      !payload.forceRefresh &&
      !context.getters[types.G_COACH_SHOULD_UPDATE]
    ) {
      return;
    }

    try {
      const response = await dataApi.get(`/coaches.json`);

      const { data } = response;
      const coaches = [];
      for (const key in data) {
        const coach = {
          id: key,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          description: data[key].description,
          hourlyRate: data[key].hourlyRate,
          areas: data[key].areas,
        };
        coaches.push(coach);
      }

      context.commit(types.M_COACH_SET, coaches);
      context.commit(types.M_COACH_SET_FETCH_TIMESTAMP);
    } catch (error) {
      throw new Error(
        error.response.data.error.message || "Failed to fetch coaches!"
      );
    }
  },
};
