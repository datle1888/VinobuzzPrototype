import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ProductSkeleton() {
  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder} />
      <View style={styles.content}>
        <View style={[styles.line, styles.lineLg]} />
        <View style={[styles.line, styles.lineMd]} />
        <View style={[styles.line, styles.lineSm]} />
        <View style={styles.block} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imagePlaceholder: {
    height: 280,
    backgroundColor: '#E9E9E9',
  },
  content: {
    padding: 16,
  },
  line: {
    height: 14,
    backgroundColor: '#E9E9E9',
    borderRadius: 8,
    marginBottom: 12,
  },
  lineLg: {
    width: '75%',
    height: 20,
  },
  lineMd: {
    width: '40%',
  },
  lineSm: {
    width: '55%',
  },
  block: {
    marginTop: 8,
    height: 120,
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
  },
});
