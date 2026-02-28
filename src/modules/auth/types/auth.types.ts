import { User, LoginResponse } from "@/types/api.types";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  login: (data: LoginResponse) => void;
  logout: () => void;
}

export type { User, LoginResponse };
