export type ChatUiState = 'hidden' | 'minimized' | 'expanded';

export type ChatMessage =
  | {
      id: string;
      role: 'bot' | 'user';
      type: 'text';
      text: string;
    }
  | {
      id: string;
      role: 'bot';
      type: 'product_action';
      text: string;
      productId: string;
      actionLabel: string;
    };

export type QuickReply = {
  id: string;
  label: string;
  replyText: string;
  botResponse: string;
};
