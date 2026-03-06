import { useQuery } from "@tanstack/react-query";
import { hospitalsService } from "../services";
import { HospitalQueryParams } from "../types/hospital.types";

export const useHospitals = (params?: HospitalQueryParams) => {
  return useQuery({
    queryKey: ["hospitals", params],
    queryFn: () => hospitalsService.getHospitals(params),
  });
};
