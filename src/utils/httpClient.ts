import axios from "axios";

const connectInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_BLOG_API,
});

connectInstance.interceptors.request.use(
  (config) => {
    // config.headers["Authorization"] = `Bearer ${localStorage.getItem(
    //   "accessToken"
    // )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const httpClient = connectInstance;
