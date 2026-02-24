import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  visible: boolean;
  onPress: () => void;
};

export default function ChatFab({ visible, onPress }: Props) {
  if (!visible) {
    return null;
  }

  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
        accessibilityRole="button"
        accessibilityLabel="Open chat"
      >
        <Text style={styles.icon}>💬</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    right: 16,
    bottom: 28,
    zIndex: 50,
    elevation: 50,
  },
  fab: {
    width: 58,
    height: 58,
    borderRadius: 999,
    backgroundColor: '#7A1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  fabPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  icon: {
    fontSize: 24,
    color: '#FFF',
  },
});
