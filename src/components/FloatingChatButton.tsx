import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { useChatContext } from "@/contexts/ChatContext";

const FloatingChatButton = () => {
  const { openChat, chatOpen } = useChatContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || chatOpen) return null;

  return (
    <button
      onClick={openChat}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent-violet/20 border border-accent-violet/40 text-accent-violet flex items-center justify-center shadow-glow hover:bg-accent-violet/30 hover:border-accent-violet transition-all duration-300 animate-in fade-in zoom-in"
      aria-label="Открыть чат"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default FloatingChatButton;
