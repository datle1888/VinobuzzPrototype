import React from 'react';
import ChatFab from './ChatFab';
import ChatOverlay from './ChatOverlay';
import { useChat } from '../../context/ChatContext';
import { QUICK_REPLIES } from '../../data/mockChat';
import { navigateToProduct } from '../../app/navigationRef';

export default function GlobalChatHost() {
  const {
    chatState,
    openChat,
    minimizeChat,
    closeChat,
    messages,
    isTyping,
    sendQuickReply,
  } = useChat();

  const handlePressProductAction = (productId: string) => {
    navigateToProduct(productId);
    minimizeChat();
  };

  return (
    <>
      <ChatFab visible={chatState !== 'expanded'} onPress={openChat} />
      <ChatOverlay
        visible={chatState === 'expanded'}
        messages={messages}
        isTyping={isTyping}
        quickReplies={QUICK_REPLIES}
        onPressQuickReply={sendQuickReply}
        onPressProductAction={handlePressProductAction}
        onMinimize={minimizeChat}
        onClose={closeChat}
      />
    </>
  );
}
