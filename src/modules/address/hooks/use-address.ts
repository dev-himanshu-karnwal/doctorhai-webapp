import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addressService } from "../services/address.service";
import { UpdateAddressData } from "../types";
import { toast } from "sonner";
import { AxiosError } from "axios";

interface AddressParams {
  accountId: string;
  data: UpdateAddressData;
}

export const useAddress = (id?: string) => {
  return useQuery({
    queryKey: ["address", id],
    queryFn: () => addressService.getAddress(id!),
    enabled: !!id,
  });
};

export const useCreateAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ accountId, data }: AddressParams) =>
      await addressService.createAddress(accountId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      queryClient.invalidateQueries({ queryKey: ["doctor"] });
      queryClient.invalidateQueries({ queryKey: ["hospitals"] });
      queryClient.invalidateQueries({ queryKey: ["hospital"] });
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      toast.error(error?.response?.data?.message || "Failed to create address");
    },
  });
};

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ accountId, data }: AddressParams) =>
      await addressService.updateAddress(accountId, data),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      queryClient.invalidateQueries({ queryKey: ["doctor"] });
      queryClient.invalidateQueries({ queryKey: ["hospitals"] });
      queryClient.invalidateQueries({ queryKey: ["hospital"] });
      queryClient.invalidateQueries({
        queryKey: ["address", variables.accountId],
      });
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      toast.error(error?.response?.data?.message || "Failed to update address");
    },
  });
};
