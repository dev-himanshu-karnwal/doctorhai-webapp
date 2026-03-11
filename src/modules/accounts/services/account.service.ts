import { axiosInstance } from "@/lib/axios";
import { VerifyAccountPayload } from "../types";

export const accountService = {
  deleteAccount: async (id: string) => {
    const response = await axiosInstance.delete(`/accounts/${id}`);
    return response.data;
  },

  verifyAccount: async (id: string, payload: VerifyAccountPayload) => {
    const response = await axiosInstance.patch(
      `/accounts/${id}/verify`,
      payload
    );
    return response.data;
  },
};
