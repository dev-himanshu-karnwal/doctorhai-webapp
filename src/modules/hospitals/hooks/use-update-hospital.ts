import { useMutation, useQueryClient } from "@tanstack/react-query";
import { hospitalDetailService } from "../services/hospital-detail.service";
import { toast } from "sonner";
import { HospitalUpdatePayload } from "../schemas/hospital-update.schema";

export function useUpdateHospital(
  id: string,
  options?: { showToast?: boolean }
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: HospitalUpdatePayload) =>
      await hospitalDetailService.updateHospital(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hospital"] });
      queryClient.invalidateQueries({ queryKey: ["hospital", id] });
      if (options?.showToast !== false) {
        toast.success("Hospital updated successfully");
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update hospital");
    },
  });
}
