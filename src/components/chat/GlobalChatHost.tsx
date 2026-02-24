import React from 'react';
import ChatFab from './ChatFab';
import ChatOverlay from './ChatOverlay';
import { useChat } from '../../context/ChatContext';

export default function GlobalChatHost() {
  const { chatState, openChat, minimizeChat, closeChat } = useChat();

  return (
    <>
      <ChatFab visible={chatState !== 'expanded'} onPress={openChat} />
      <ChatOverlay
        visible={chatState === 'expanded'}
        onMinimize={minimizeChat}
        onClose={closeChat}
      />
    </>
  );
}
