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
    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
    if (!OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not configured");

    const OPENAI_ASSISTANT_ID = Deno.env.get("OPENAI_ASSISTANT_ID");
    if (!OPENAI_ASSISTANT_ID) throw new Error("OPENAI_ASSISTANT_ID is not configured");

    const { action, threadId, message } = await req.json();

    const headers = {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
      "OpenAI-Beta": "assistants=v2",
    };

    // Action: create thread
    if (action === "create_thread") {
      const res = await fetch("https://api.openai.com/v1/threads", {
        method: "POST",
        headers,
        body: JSON.stringify({}),
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(`Failed to create thread [${res.status}]: ${t}`);
      }
      const thread = await res.json();
      return new Response(JSON.stringify({ threadId: thread.id }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Action: send message + run
    if (action === "send_message") {
      if (!threadId) throw new Error("threadId is required");

      // Add user message if provided
      if (message) {
        const msgRes = await fetch(
          `https://api.openai.com/v1/threads/${threadId}/messages`,
          {
            method: "POST",
            headers,
            body: JSON.stringify({ role: "user", content: message }),
          }
        );
        if (!msgRes.ok) {
          const t = await msgRes.text();
          throw new Error(`Failed to add message [${msgRes.status}]: ${t}`);
        }
      }

      // Create a run
      const runRes = await fetch(
        `https://api.openai.com/v1/threads/${threadId}/runs`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ assistant_id: OPENAI_ASSISTANT_ID }),
        }
      );
      if (!runRes.ok) {
        const t = await runRes.text();
        throw new Error(`Failed to create run [${runRes.status}]: ${t}`);
      }
      const run = await runRes.json();

      // Poll for completion
      let runStatus = run;
      while (
        runStatus.status === "queued" ||
        runStatus.status === "in_progress"
      ) {
        await new Promise((r) => setTimeout(r, 1000));
        const pollRes = await fetch(
          `https://api.openai.com/v1/threads/${threadId}/runs/${run.id}`,
          { headers }
        );
        if (!pollRes.ok) {
          const t = await pollRes.text();
          throw new Error(`Failed to poll run [${pollRes.status}]: ${t}`);
        }
        runStatus = await pollRes.json();
      }

      if (runStatus.status !== "completed") {
        throw new Error(`Run ended with status: ${runStatus.status}`);
      }

      // Get messages
      const msgsRes = await fetch(
        `https://api.openai.com/v1/threads/${threadId}/messages?order=desc&limit=1`,
        { headers }
      );
      if (!msgsRes.ok) {
        const t = await msgsRes.text();
        throw new Error(`Failed to get messages [${msgsRes.status}]: ${t}`);
      }
      const msgsData = await msgsRes.json();
      const assistantMsg = msgsData.data?.[0];
      const text =
        assistantMsg?.content
          ?.filter((c: any) => c.type === "text")
          ?.map((c: any) => c.text?.value)
          ?.join("\n") || "";

      return new Response(JSON.stringify({ reply: text }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    throw new Error(`Unknown action: ${action}`);
  } catch (e) {
    console.error("chat-assistant error:", e);
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
