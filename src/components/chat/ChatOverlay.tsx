import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  visible: boolean;
  onMinimize: () => void;
  onClose: () => void;
};

export default function ChatOverlay({ visible, onMinimize, onClose }: Props) {
  if (!visible) {
    return null;
  }

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

          <View style={styles.body}>
            <Text style={styles.placeholderTitle}>Chat overlay ready</Text>
            <Text style={styles.placeholderText}>
              Next step we will add mock messages, typing indicator, and quick
              replies.
            </Text>
          </View>
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
    height: '68%',
    minHeight: 420,
    maxHeight: 560,
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
  body: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111',
  },
  placeholderText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#555',
    textAlign: 'center',
  },
});
