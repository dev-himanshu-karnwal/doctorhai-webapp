export interface UpdateAddressData {
  addressLine1: string;
  addressLine2?: string | null;
  city: string;
  state: string;
  pincode: string;
  latitude?: number | null;
  longitude?: number | null;
}

export interface CreateAddressData extends UpdateAddressData {
  accountId: string;
}

export interface AddressResponse {
  status: string;
  message: string;
  data: {
    address: UpdateAddressData & { id: string; accountId: string };
  };
}
