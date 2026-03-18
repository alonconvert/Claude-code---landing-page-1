import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, { message: "נא להזין שם מלא" }),
  phone: z
    .string()
    .regex(/^05\d{8}$/, { message: "נא להזין מספר טלפון ישראלי תקין" }),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
