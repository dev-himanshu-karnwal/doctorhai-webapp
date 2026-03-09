import { useQuery } from "@tanstack/react-query";
import { hospitalDetailService } from "../services";

export const useHospital = (id: string) => {
  return useQuery({
    queryKey: ["hospital", id],
    queryFn: async () => {
      const response = await hospitalDetailService.getHospitalById(id);
      return response.data.hospital;
    },
    enabled: !!id,
  });
};
