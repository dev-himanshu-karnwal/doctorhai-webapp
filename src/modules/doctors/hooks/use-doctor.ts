import { useQuery } from "@tanstack/react-query";
import { doctorsService } from "../services";

export const useDoctor = (id: string) => {
  return useQuery({
    queryKey: ["doctor", id],
    queryFn: async () => await doctorsService.getDoctor(id),
    enabled: !!id,
  });
};
