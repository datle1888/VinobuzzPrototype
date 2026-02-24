import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { ChatMessage } from '../../types/chat';

type Props = {
  message: ChatMessage;
  onPressProductAction: (productId: string) => void;
};

export default function ChatMessageBubble({
  message,
  onPressProductAction,
}: Props) {
  const isUser = message.role === 'user';

  return (
    <View style={[styles.row, isUser ? styles.rowRight : styles.rowLeft]}>
      <View
        style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}
      >
        <Text style={[styles.text, isUser ? styles.userText : styles.botText]}>
          {message.text}
        </Text>

        {message.type === 'product_action' ? (
          <Pressable
            onPress={() => onPressProductAction(message.productId)}
            style={({ pressed }) => [
              styles.actionButton,
              pressed && { opacity: 0.9 },
            ]}
            accessibilityRole="button"
            accessibilityLabel={`View product ${message.productId}`}
          >
            <Text style={styles.actionButtonText}>{message.actionLabel}</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  rowLeft: {
    justifyContent: 'flex-start',
  },
  rowRight: {
    justifyContent: 'flex-end',
  },
  bubble: {
    maxWidth: '85%',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  botBubble: {
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 6,
  },
  userBubble: {
    backgroundColor: '#7A1E1E',
    borderTopRightRadius: 6,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
  botText: {
    color: '#222',
  },
  userText: {
    color: '#FFF',
  },
  actionButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600',
  },
});
