import { createContext, useContext, useState, type ReactNode } from "react";

interface ChatContextType {
  chatOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export const useChatContext = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChatContext must be used within ChatProvider");
  return ctx;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <ChatContext.Provider
      value={{
        chatOpen,
        openChat: () => setChatOpen(true),
        closeChat: () => setChatOpen(false),
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
