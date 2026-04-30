import { useState } from "react";
import { Send } from "lucide-react";

const SEND_SUMMARY_URL =
  "https://lpqkldwtvalnfhqqiwah.supabase.co/functions/v1/send-chat-summary";

interface ChatContactFormProps {
  messages: { role: "user" | "assistant"; content: string }[];
  onSubmitted: () => void;
}

const ChatContactForm = ({ messages, onSubmitted }: ChatContactFormProps) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setSending(true);
    setError("");

    try {
      const res = await fetch(SEND_SUMMARY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), contact: contact.trim(), messages }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Send failed");
      onSubmitted();
    } catch (err) {
      console.error("Submit error:", err);
      setError("Не удалось отправить. Попробуйте ещё раз.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-2 mt-3 mb-1 rounded-lg border border-accent-violet/20 bg-background/60 backdrop-blur-sm p-4 space-y-3"
    >
      <p className="text-xs text-muted-foreground">
        Оставьте контакт — Марина свяжется с вами
      </p>
      <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full bg-secondary/40 border border-border/30 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-violet/50 transition-colors"
      />
      <input
        type="text"
        placeholder="Telegram или email"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
        className="w-full bg-secondary/40 border border-border/30 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-violet/50 transition-colors"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
      <button
        type="submit"
        disabled={sending || !name.trim() || !contact.trim()}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent-violet/20 border border-accent-violet/30 text-sm font-medium text-foreground hover:bg-accent-violet/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        <Send className="w-3.5 h-3.5 text-accent-violet" />
        {sending ? "Отправка..." : "Отправить и получить резюме диалога"}
      </button>
    </form>
  );
};

export default ChatContactForm;
