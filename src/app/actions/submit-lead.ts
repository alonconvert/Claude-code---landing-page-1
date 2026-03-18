"use server";

import { leadFormSchema, type LeadFormValues } from "@/lib/validations";

export async function submitLead(data: LeadFormValues) {
  const parsed = leadFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false as const, error: "נתונים לא תקינים" };
  }

  const payload = {
    name: parsed.data.name,
    phone: parsed.data.phone,
    submitted_at: new Date().toISOString(),
    source: "landing-page",
  };

  const webhookUrl = process.env.WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("WEBHOOK_URL not configured");
    return { success: false as const, error: "שגיאת שרת" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false as const, error: "שגיאה בשליחה, נסו שוב" };
    }

    return { success: true as const };
  } catch {
    return { success: false as const, error: "שגיאה בשליחה, נסו שוב" };
  }
}
