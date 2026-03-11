import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { accountService } from "../services";
import { VerifyAccountPayload } from "../types";

interface VerifyAccountParams {
  id: string;
  payload: VerifyAccountPayload;
}

export const useVerifyAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, payload }: VerifyAccountParams) =>
      await accountService.verifyAccount(id, payload),
    onSuccess: () => {
      toast.success("Account status updated");
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      queryClient.invalidateQueries({ queryKey: ["hospitals"] });
      queryClient.invalidateQueries({ queryKey: ["doctor-stats"] });
      queryClient.invalidateQueries({ queryKey: ["hospital-stats"] });
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message =
        error.response?.data?.message || "Failed to update account status";
      toast.error(message);
    },
  });
};
