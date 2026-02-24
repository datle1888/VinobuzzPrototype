import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TypingIndicator() {
  return (
    <View style={styles.row}>
      <View style={styles.bubble}>
        <Text style={styles.text}>Typing...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bubble: {
    backgroundColor: '#F3F3F3',
    borderRadius: 14,
    borderTopLeftRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  text: {
    color: '#666',
    fontSize: 13,
    fontStyle: 'italic',
  },
});
