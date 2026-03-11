export interface Account {
  id: string;
  email: string;
  isVerified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface VerifyAccountPayload {
  isVerified: boolean;
}
