import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  content: string;
  defaultExpanded?: boolean;
};

export default function ExpandableSection({
  title,
  content,
  defaultExpanded = false,
}: Props) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.header}
        onPress={() => setExpanded(prev => !prev)}
        accessibilityRole="button"
        accessibilityLabel={`${expanded ? 'Collapse' : 'Expand'} ${title}`}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.icon}>{expanded ? '−' : '+'}</Text>
      </Pressable>

      {expanded ? <Text style={styles.content}>{content}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#DDD',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
  header: {
    minHeight: 48,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    flex: 1,
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
    lineHeight: 20,
    color: '#444',
    width: 20,
    textAlign: 'center',
  },
  content: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#EEE',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    lineHeight: 21,
    color: '#444',
  },
});
