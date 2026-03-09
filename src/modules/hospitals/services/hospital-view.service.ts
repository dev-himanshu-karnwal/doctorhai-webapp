import { axiosInstance } from "@/lib/axios";

export const hospitalViewService = {
  incrementViewCount: async (id: string) => {
    const response = await axiosInstance.post(
      `/hospitals/${id}/increment-view-count`
    );
    return response.data;
  },
};
