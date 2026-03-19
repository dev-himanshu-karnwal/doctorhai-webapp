import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { doctorsService } from "../services";
import { DoctorsQueryParams } from "../types";

export const useDoctors = (params?: DoctorsQueryParams) => {
  return useQuery({
    queryKey: ["doctors", { ...params }],
    queryFn: async () => {
      const data = await doctorsService.getDoctors(params);
      return {
        doctors: data?.doctors || [],
        metadata: data?.paginatedmetadata,
      };
    },
    placeholderData: keepPreviousData,
  });
};
