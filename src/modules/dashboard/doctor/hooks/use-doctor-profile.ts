import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { doctorProfileService } from "../services/doctor-profile.service";
import { DoctorProfileBaseValues } from "../validators";
import { AUTH_KEYS } from "@/modules/auth";

interface UpdateProfileParams {
  id: string;
  data: DoctorProfileBaseValues;
}

interface ApiError {
  message: string;
}

export const useUpdateDoctorProfile = (options?: { showToast?: boolean }) => {
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
      if (options?.showToast !== false) {
        toast.success("Profile updated successfully!");
      }
    },
    onError: (error: AxiosError<ApiError>) => {
      const message =
        error?.response?.data?.message || "Failed to update profile";
      toast.error(message);
    },
  });
};
