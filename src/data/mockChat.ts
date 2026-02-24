import type { ChatMessage, QuickReply } from '../types/chat';

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    role: 'bot',
    type: 'text',
    text: 'Hi! I can help you discover wines based on taste or budget.',
  },
  {
    id: 'm2',
    role: 'user',
    type: 'text',
    text: 'Show me something smooth and easy to drink.',
  },
  {
    id: 'm3',
    role: 'bot',
    type: 'text',
    text: 'Great pick. I have a Pinot Noir recommendation for you.',
  },
  {
    id: 'm4',
    role: 'bot',
    type: 'product_action',
    text: 'Pinot Noir Reserve 2021 — medium-bodied with cherry and soft spice notes.',
    productId: '123',
    actionLabel: 'View product',
  },
];

export const QUICK_REPLIES: QuickReply[] = [
  {
    id: 'q1',
    label: 'Recommend red wine',
    replyText: 'Recommend a red wine.',
    botResponse: 'Try a Pinot Noir if you want something smooth and versatile.',
  },
  {
    id: 'q2',
    label: 'Under $30',
    replyText: 'What do you have under $30?',
    botResponse: 'I have a Pinot Noir Reserve at $29.99 that fits your budget.',
  },
  {
    id: 'q3',
    label: 'Dry wine',
    replyText: 'I prefer dry wine.',
    botResponse: 'Noted — I’ll bias recommendations toward drier profiles.',
  },
];
