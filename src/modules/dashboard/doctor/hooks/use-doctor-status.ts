import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { doctorStatusService } from "../services/doctor-status.service";
import { DoctorStatusUpdateData } from "../types";

interface UpdateDoctorStatusParams {
  id: string;
  data: DoctorStatusUpdateData;
}

interface ApiError {
  message: string;
}

export const useUpdateDoctorStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: UpdateDoctorStatusParams) =>
      await doctorStatusService.updateDoctorStatus(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["doctor", variables.id],
      });
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      queryClient.invalidateQueries({ queryKey: ["doctor-stats"] });
      queryClient.invalidateQueries({ queryKey: ["hospital-stats"] });
      toast.success("Status updated successfully!");
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error?.response?.data?.message || "Failed to update status";
      toast.error(message);
    },
  });
};
