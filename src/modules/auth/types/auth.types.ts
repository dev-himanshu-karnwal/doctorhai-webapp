import { User, LoginResponse } from "@/types/api.types";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

export type { User, LoginResponse };
