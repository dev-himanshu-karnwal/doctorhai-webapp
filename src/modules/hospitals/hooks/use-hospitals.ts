import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { hospitalsService } from "../services";
import { HospitalQueryParams } from "../types/hospital.types";

export const useHospitals = (params?: HospitalQueryParams) => {
  return useQuery({
    queryKey: ["hospitals", params],
    queryFn: async () => await hospitalsService.getHospitals(params),
    placeholderData: keepPreviousData,
  });
};
