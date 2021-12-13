import axios from "axios";
import { getToken } from "@/utils/auth";
import { baseUrl, baseUrlRailone } from "@/utils/config";

const service = axios.create({
  timeout: 60 * 1000, // request timeout
  headers: { "Content-Type": "application/json" },
});

service.interceptors.request.use(
  (config) => {
    if (config.url?.substring(0, 8) === '/railone') {
      config.baseURL = baseUrlRailone
      config.url = config.url?.substring(8, config.url?.length)
      const token = getToken();
      if (token) {
        //@ts-ignore
        config.headers.token = token;
      }
    } else {
      config.baseURL = baseUrl;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 0) {
      return Promise.reject(res);
    } else {
      return response.data;
    }
  },
  (error) => {
    const err = error.response;
    return Promise.reject(err.data);
  }
);

export default service;
