import { useMutation, useQueryClient } from "@tanstack/react-query";
import { hospitalViewService } from "../services/hospital-view.service";

export function useIncrementHospitalView() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: string) =>
      await hospitalViewService.incrementViewCount(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["hospital", id] });
      queryClient.invalidateQueries({ queryKey: ["hospitals"] });
    },
    onError: (err) => {
      console.error("Error incrementing hospital view count:", err);
    },
  });

  return {
    incrementView: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
