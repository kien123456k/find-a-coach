import { authApi, authType } from "../../../apis/auth";
import * as types from "./constants";

let timer;

export default {
  async [types.A_AUTH_LOGIN](context, payload) {
    return context.dispatch(types.A_AUTH, {
      ...payload,
      mode: "login",
    });
  },
  async [types.A_AUTH_SIGNUP](context, payload) {
    return context.dispatch(types.A_AUTH, {
      ...payload,
      mode: "signup",
    });
  },
  async [types.A_AUTH](context, payload) {
    const { mode } = payload;
    const authData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };

    try {
      let response;
      if (mode === "login") {
        response = await authApi(authType.SIGNIN).post("", authData);
      } else if (mode === "signup") {
        response = await authApi(authType.SIGNUP).post("", authData);
      }

      const { data } = response;
      console.log(data);
      const expiresIn = data.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;

      localStorage.setItem("token", data.idToken);
      localStorage.setItem("userId", data.localId);
      localStorage.setItem("tokenExpiration", expirationDate);

      timer = setTimeout(() => {
        context.dispatch(types.A_AUTH_LOGOUT);
      }, expiresIn);

      context.commit(types.M_AUTH_SET_USER, {
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw new Error(
        error.response.data.error.message ||
          "Failed to authenticate. Check your login data!"
      );
    }
  },
  [types.A_AUTH_TRY_LOGIN](context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch(types.A_AUTH_LOGOUT);
    }, expiresIn);

    if (token && userId) {
      context.commit(types.M_AUTH_SET_USER, {
        token,
        userId,
      });
    }
  },
  [types.A_AUTH_LOGOUT](context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit(types.M_AUTH_SET_USER, {
      token: null,
      userId: null,
    });
  },
  [types.A_AUTH_AUTO_LOGOUT](context) {
    context.dispatch(types.A_AUTH_LOGOUT);
    context.commit(types.M_AUTH_SET_AUTO_LOGOUT);
  },
};
