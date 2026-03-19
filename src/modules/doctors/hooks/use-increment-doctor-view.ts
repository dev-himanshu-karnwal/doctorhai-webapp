import { useMutation, useQueryClient } from "@tanstack/react-query";
import { doctorViewService } from "../services/doctor-view.service";

export function useIncrementDoctorView() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: string) =>
      await doctorViewService.incrementViewCount(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["doctor", id] });
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
    },
    onError: (err) => {
      console.error("Error incrementing doctor view count:", err);
    },
  });

  return {
    incrementView: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
