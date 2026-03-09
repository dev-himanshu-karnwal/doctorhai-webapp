import axios, { AxiosInstance } from "axios";

const API_URL =
  `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1` ||
  "http://localhost:4000/api/v1";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
