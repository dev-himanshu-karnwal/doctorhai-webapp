import { axiosInstance } from "@/lib/axios";
import { UpdateAddressData, AddressResponse } from "../types";

class AddressService {
  async updateAddress(accountId: string, data: UpdateAddressData) {
    const response = await axiosInstance.patch<AddressResponse>(
      `/addresses/${accountId}`,
      data
    );
    return response.data;
  }

  async getAddress(id: string) {
    const response = await axiosInstance.get<AddressResponse>(
      `/addresses/${id}`
    );
    return response.data.data.address;
  }
}

export const addressService = new AddressService();
