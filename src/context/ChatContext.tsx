import React, { createContext, useContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { ChatUiState } from '../types/chat';

type ChatContextValue = {
  chatState: ChatUiState;
  openChat: () => void;
  minimizeChat: () => void;
  closeChat: () => void;
  resetToBubble: () => void;
};

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

export function ChatProvider({ children }: PropsWithChildren) {
  const [chatState, setChatState] = useState<ChatUiState>('minimized');

  const value = useMemo<ChatContextValue>(
    () => ({
      chatState,
      openChat: () => setChatState('expanded'),
      minimizeChat: () => setChatState('minimized'),
      closeChat: () => setChatState('minimized'), // keep FAB visible
      resetToBubble: () => setChatState('minimized'),
    }),
    [chatState],
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
