import * as z from "zod";

export const quickReturnSchema = z
  .object({
    status: z.enum(["available", "busy", "back_soon", "off_duty"]),
    expectedAt: z.string().optional(),
    expectedAtNote: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.status === "back_soon" && !data.expectedAt) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select a return time",
        path: ["expectedAt"],
      });
    }
  });

export type QuickReturnValues = z.infer<typeof quickReturnSchema>;
