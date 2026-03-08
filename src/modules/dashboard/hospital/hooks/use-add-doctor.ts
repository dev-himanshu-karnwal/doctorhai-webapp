import { useMutation, useQueryClient } from "@tanstack/react-query";
import { hospitalService } from "../services/hospital.service";
import { DoctorRegistrationValues } from "@/modules/auth/types/registration.types";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useAddDoctor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DoctorRegistrationValues) =>
      hospitalService.addDoctor(data),
    onSuccess: () => {
      toast.success("Doctor added successfully");
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || "Failed to add doctor";
      toast.error(message);
    },
  });
};
