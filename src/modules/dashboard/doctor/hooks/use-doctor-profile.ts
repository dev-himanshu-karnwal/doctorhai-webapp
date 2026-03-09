import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { doctorProfileService } from "../services/doctor-profile.service";
import { DoctorProfileValues } from "../validators";
import { AUTH_KEYS } from "@/modules/auth";

interface UpdateProfileParams {
  id: string;
  data: DoctorProfileValues;
}

interface ApiError {
  message: string;
}

export const useUpdateDoctorProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: UpdateProfileParams) =>
      await doctorProfileService.updateProfile(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["doctor", variables.id],
      });
      queryClient.invalidateQueries({
        queryKey: AUTH_KEYS.USER,
      });
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      toast.success("Profile updated successfully!");
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error?.response?.data?.message || "Failed to update profile";
      toast.error(message);
    },
  });
};
