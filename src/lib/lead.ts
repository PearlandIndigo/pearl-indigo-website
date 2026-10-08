// Lead submission helper.
// Posts form data to the webhook URL configured in .env (VITE_LEAD_WEBHOOK_URL).
// Connect this to a GoHighLevel Inbound Webhook to feed leads straight into your CRM.
// If no webhook is configured, the submission resolves locally so the UI still
// shows a success state (useful while testing in Lovable).

export interface LeadPayload {
  form: string;
  [key: string]: unknown;
}

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean }> {
  const url = import.meta.env.VITE_LEAD_WEBHOOK_URL as string | undefined;
  if (!url) {
    console.info("[lead] No webhook configured — lead captured locally:", payload);
    return { ok: true };
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
    });
    return { ok: res.ok };
  } catch (err) {
    console.error("[lead] Webhook failed:", err);
    return { ok: false };
  }
}
