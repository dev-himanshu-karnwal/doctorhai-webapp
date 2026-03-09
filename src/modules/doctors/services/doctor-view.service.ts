import { axiosInstance } from "@/lib/axios";

export const doctorViewService = {
  incrementViewCount: async (id: string) => {
    const response = await axiosInstance.post(
      `/doctor-profiles/${id}/increment-view-count`
    );
    return response.data;
  },
};
