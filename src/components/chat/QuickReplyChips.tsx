import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { QuickReply } from '../../types/chat';

type Props = {
  replies: QuickReply[];
  onPressReply: (reply: QuickReply) => void;
};

export default function QuickReplyChips({ replies, onPressReply }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {replies.map(reply => (
          <Pressable
            key={reply.id}
            onPress={() => onPressReply(reply)}
            style={({ pressed }) => [
              styles.chip,
              pressed && styles.chipPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={reply.label}
          >
            <Text style={styles.chipText}>{reply.label}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#EEE',
    paddingTop: 10,
  },
  content: {
    paddingHorizontal: 12,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#F2F2F2',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#DDD',
  },
  chipPressed: {
    opacity: 0.85,
  },
  chipText: {
    fontSize: 13,
    color: '#222',
    fontWeight: '500',
  },
});
