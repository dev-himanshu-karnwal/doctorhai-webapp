import { useQuery } from "@tanstack/react-query";
import { doctorsService } from "../services";
import { DoctorQueryParams } from "../types";

export const useDoctors = (params?: DoctorQueryParams) => {
  return useQuery({
    queryKey: ["doctors", params],
    queryFn: async () => {
      const data = await doctorsService.getDoctors(params);
      return data?.doctors || [];
    },
  });
};
