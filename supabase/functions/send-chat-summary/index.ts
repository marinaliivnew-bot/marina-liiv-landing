import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const { name, contact, messages } = await req.json();

    if (!name || !contact || !messages?.length) {
      throw new Error("Missing required fields: name, contact, messages");
    }

    const now = new Date();
    const dateStr = now.toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const subject = `Новый диалог — ${name} — ${dateStr}`;

    const chatHtml = messages
      .map(
        (msg: { role: string; content: string }) =>
          `<div style="margin-bottom:12px;padding:10px 14px;border-radius:8px;${
            msg.role === "user"
              ? "background:#f3f0ff;border-left:3px solid #7c3aed;"
              : "background:#f9fafb;border-left:3px solid #d1d5db;"
          }">
        <strong style="color:${msg.role === "user" ? "#7c3aed" : "#6b7280"};font-size:12px;text-transform:uppercase;">
          ${msg.role === "user" ? "Пользователь" : "Ассистент"}
        </strong>
        <div style="margin-top:4px;color:#1f2937;font-size:14px;line-height:1.5;white-space:pre-wrap;">${msg.content}</div>
      </div>`
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:20px;">
        <h2 style="color:#1f2937;margin-bottom:4px;">Новый диалог с сайта</h2>
        <p style="color:#6b7280;margin-top:0;margin-bottom:20px;font-size:14px;">${dateStr}</p>
        
        <div style="background:#f9fafb;border-radius:8px;padding:16px;margin-bottom:24px;">
          <p style="margin:0 0 8px;font-size:14px;"><strong>Имя:</strong> ${name}</p>
          <p style="margin:0;font-size:14px;"><strong>Контакт:</strong> ${contact}</p>
        </div>
        
        <h3 style="color:#1f2937;margin-bottom:12px;">История переписки</h3>
        ${chatHtml}
      </div>
    `;

    // Determine if contact is an email
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

    const recipients = ["marinaliiv.new@gmail.com"];

    // Send to Marina
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Marina Liiv Site <onboarding@resend.dev>",
        to: recipients,
        subject,
        html,
      }),
    });

    // Send copy to user if they provided an email
    if (isEmail) {
      const userHtml = `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:20px;">
          <h2 style="color:#1f2937;margin-bottom:4px;">Спасибо за обращение, ${name}!</h2>
          <p style="color:#6b7280;margin-top:0;margin-bottom:20px;font-size:14px;">
            Марина свяжется с вами в течение одного рабочего дня.
          </p>
          <h3 style="color:#1f2937;margin-bottom:12px;">Ваш диалог</h3>
          ${chatHtml}
          <p style="color:#6b7280;font-size:13px;margin-top:24px;border-top:1px solid #e5e7eb;padding-top:16px;">
            С уважением,<br/>Marina Liiv
          </p>
        </div>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Marina Liiv Site <onboarding@resend.dev>",
          to: [contact],
          subject: `Резюме вашего диалога — Marina Liiv`,
          html: userHtml,
        }),
      });
    }

    if (!res.ok) {
      const t = await res.text();
      throw new Error(`Resend API error [${res.status}]: ${t}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("send-chat-summary error:", e);
    return new Response(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
