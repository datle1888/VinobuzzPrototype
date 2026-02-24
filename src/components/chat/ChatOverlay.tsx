import React, { useEffect, useRef } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { ListRenderItem } from 'react-native';
import type { ChatMessage, QuickReply } from '../../types/chat';
import ChatMessageBubble from './ChatMessageBubble';
import TypingIndicator from './TypingIndicator';
import QuickReplyChips from './QuickReplyChips';

type Props = {
  visible: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  quickReplies: QuickReply[];
  onPressQuickReply: (reply: QuickReply) => void;
  onPressProductAction: (productId: string) => void;
  onMinimize: () => void;
  onClose: () => void;
};

export default function ChatOverlay({
  visible,
  messages,
  isTyping,
  quickReplies,
  onPressQuickReply,
  onPressProductAction,
  onMinimize,
  onClose,
}: Props) {
  const listRef = useRef<FlatList<ChatMessage>>(null);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        listRef.current?.scrollToEnd({ animated: true });
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [visible, messages.length, isTyping]);

  if (!visible) {
    return null;
  }

  const renderItem: ListRenderItem<ChatMessage> = ({ item }) => (
    <ChatMessageBubble
      message={item}
      onPressProductAction={onPressProductAction}
    />
  );

  return (
    <View pointerEvents="box-none" style={styles.root}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.panel}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Vinobuzz Chat</Text>
              <Text style={styles.subtitle}>Assistant prototype</Text>
            </View>

            <View style={styles.headerActions}>
              <Pressable
                onPress={onMinimize}
                style={styles.iconButton}
                accessibilityRole="button"
                accessibilityLabel="Minimize chat"
              >
                <Text style={styles.iconText}>—</Text>
              </Pressable>

              <Pressable
                onPress={onClose}
                style={styles.iconButton}
                accessibilityRole="button"
                accessibilityLabel="Close chat"
              >
                <Text style={styles.iconText}>✕</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.messagesArea}>
            <FlatList
              ref={listRef}
              data={messages}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              contentContainerStyle={styles.messagesContent}
              showsVerticalScrollIndicator={false}
            />
            {isTyping ? (
              <View style={styles.typingWrap}>
                <TypingIndicator />
              </View>
            ) : null}
          </View>

          <QuickReplyChips
            replies={quickReplies}
            onPressReply={onPressQuickReply}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 40,
    elevation: 40,
    justifyContent: 'flex-end',
    pointerEvents: 'box-none',
  },
  container: {
    width: '100%',
  },
  panel: {
    marginHorizontal: 12,
    marginBottom: 12,
    height: '72%',
    minHeight: 460,
    maxHeight: 620,
    backgroundColor: '#FFF',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#DDD',
    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  header: {
    minHeight: 64,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E6E6E6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
  },
  iconText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  messagesArea: {
    flex: 1,
  },
  messagesContent: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 8,
  },
  typingWrap: {
    paddingHorizontal: 12,
  },
});
