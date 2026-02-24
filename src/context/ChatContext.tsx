import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { PropsWithChildren } from 'react';
import type { ChatMessage, ChatUiState, QuickReply } from '../types/chat';
import { INITIAL_CHAT_MESSAGES } from '../data/mockChat';

type ChatContextValue = {
  chatState: ChatUiState;
  messages: ChatMessage[];
  isTyping: boolean;
  openChat: () => void;
  minimizeChat: () => void;
  closeChat: () => void;
  resetToBubble: () => void;
  sendQuickReply: (reply: QuickReply) => void;
};

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

export function ChatProvider({ children }: PropsWithChildren) {
  const [chatState, setChatState] = useState<ChatUiState>('minimized');
  const [messages, setMessages] = useState<ChatMessage[]>(
    INITIAL_CHAT_MESSAGES,
  );
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sendQuickReply = (reply: QuickReply) => {
    // Add user's quick reply immediately
    setMessages(prev => [
      ...prev,
      {
        id: `u-${Date.now()}`,
        role: 'user',
        type: 'text',
        text: reply.replyText,
      },
    ]);

    // Simulate assistant typing then responding
    setIsTyping(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          role: 'bot',
          type: 'text',
          text: reply.botResponse,
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  const value = useMemo<ChatContextValue>(
    () => ({
      chatState,
      messages,
      isTyping,
      openChat: () => setChatState('expanded'),
      minimizeChat: () => setChatState('minimized'),
      closeChat: () => setChatState('minimized'),
      resetToBubble: () => setChatState('minimized'),
      sendQuickReply,
    }),
    [chatState, messages, isTyping],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }

  return context;
}
