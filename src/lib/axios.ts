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
  paramsSerializer: {
    serialize: (params) => {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => {
            if (val !== undefined && val !== null) {
              searchParams.append(key, String(val));
            }
          });
        } else if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        }
      });
      return searchParams.toString();
    },
  },
});
