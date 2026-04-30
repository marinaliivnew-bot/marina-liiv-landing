import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import ChatContactForm from "./ChatContactForm";

const CHAT_URL =
  "https://lpqkldwtvalnfhqqiwah.supabase.co/functions/v1/chat-assistant";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatWidgetProps {
  open: boolean;
  onClose: () => void;
}

const TypingDots = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 rounded-full bg-accent-violet/60 animate-bounce"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

const FINAL_MESSAGE_PATTERNS = [
  "следующие шаги",
  "следующий шаг",
  "подведём итог",
  "подведем итог",
  "резюмируя",
  "в завершение",
  "рекомендую вам",
  "готов предложить",
  "могу предложить следующее",
  "свяжитесь со мной",
  "связаться с мариной",
  "записаться на",
  "оставьте свои контакт",
];

const isFinalMessage = (content: string): boolean => {
  const lower = content.toLowerCase();
  return FINAL_MESSAGE_PATTERNS.some((p) => lower.includes(p));
};

const ChatWidget = ({ open, onClose }: ChatWidgetProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseId, setResponseId] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 50);
  }, []);

  // Get greeting when opened for the first time
  useEffect(() => {
    if (!open || initialized) return;

    const init = async () => {
      setLoading(true);
      try {
        const res = await fetch(CHAT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "Привет" }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Init failed");
        if (data.reply) {
          setMessages([{ role: "assistant", content: data.reply }]);
          setResponseId(data.response_id ?? null);
        }
        setInitialized(true);
      } catch (err) {
        console.error("Chat init error:", err);
        setMessages([
          {
            role: "assistant",
            content: "Извините, произошла ошибка при подключении. Попробуйте позже.",
          },
        ]);
        setInitialized(true);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [open, initialized]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    try {
      const body: Record<string, string> = { message: text };
      if (responseId) body.previous_response_id = responseId;

      const res = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Send failed");
      if (data.reply) {
        setResponseId(data.response_id ?? null);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
        if (isFinalMessage(data.reply)) {
          setShowContactForm(true);
        }
      }
    } catch (err) {
      console.error("Send error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Произошла ошибка. Попробуйте ещё раз.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:pointer-events-none"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed z-[70] inset-0 md:inset-auto md:right-4 md:bottom-4 md:top-4 md:w-[420px] flex flex-col bg-card border-l border-border/40 shadow-2xl md:rounded-xl md:border overflow-hidden animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/30 bg-background/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md border border-accent-violet/30 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-accent-violet" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                AI-ассистент
              </p>
              <p className="text-xs text-muted-foreground">Marina Liiv</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-accent-violet/20 text-foreground border border-accent-violet/20"
                    : "bg-secondary/50 text-foreground border border-border/20"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div className="prose prose-sm prose-invert max-w-none [&_p]:my-1 [&_ul]:my-1 [&_ol]:my-1 [&_li]:my-0.5">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-secondary/50 rounded-lg border border-border/20">
                <TypingDots />
              </div>
            </div>
          )}
          {showContactForm && !contactSubmitted && !loading && (
            <ChatContactForm
              messages={messages}
              onSubmitted={() => {
                setContactSubmitted(true);
                setShowContactForm(false);
                setMessages((prev) => [
                  ...prev,
                  {
                    role: "assistant",
                    content:
                      "Спасибо! Марина свяжется с вами в течение одного рабочего дня.",
                  },
                ]);
              }}
            />
          )}
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-border/30 bg-background/60 backdrop-blur-sm">
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Напишите сообщение..."
              rows={1}
              className="flex-1 resize-none bg-secondary/40 border border-border/30 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-violet/50 transition-colors"
              style={{ maxHeight: 120 }}
              onInput={(e) => {
                const t = e.currentTarget;
                t.style.height = "auto";
                t.style.height = Math.min(t.scrollHeight, 120) + "px";
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="p-2.5 rounded-lg bg-accent-violet/20 border border-accent-violet/30 text-accent-violet hover:bg-accent-violet/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
