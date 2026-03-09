export type ForgotPasswordRequest = {
  email: string;
};

export type ForgotPasswordVerifyRequest = {
  email: string;
  otp: string;
};

export type ForgotPasswordVerifyResponse = {
  reset: {
    resetToken: string;
    profiles: Array<{
      accountId: string;
      type: string;
      name: string;
    }>;
  };
};
