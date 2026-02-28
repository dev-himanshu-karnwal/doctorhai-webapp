import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const API_URL =
  `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1` ||
  "http://localhost:4000/api/v1";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
