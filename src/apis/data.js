import axios from "axios";

const orderApi = axios.create({
  baseURL: process.env.VUE_APP_REALTIME_DB_API_URL,
});

export default orderApi;
