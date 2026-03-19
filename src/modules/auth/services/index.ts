export * from "./login";
export * from "./register";
export * from "./me";
export * from "./logout";

import { loginService } from "./login";
import { registerService } from "./register";
import { meService } from "./me";
import { logoutService } from "./logout";

// Backward compatibility or unified access
export const authService = {
  ...loginService,
  ...registerService,
  ...meService,
  ...logoutService,
};
