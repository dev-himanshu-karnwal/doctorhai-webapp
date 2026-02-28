export * from "./login";
export * from "./register";
export * from "./me";

import { loginService } from "./login";
import { registerService } from "./register";
import { meService } from "./me";

// Backward compatibility or unified access
export const authService = {
  ...loginService,
  ...registerService,
  ...meService,
};
