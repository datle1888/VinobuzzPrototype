import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useConnectivity } from '../../context/ConnectivityContext';

export default function OfflineBanner() {
  const { isOffline } = useConnectivity();

  if (!isOffline) {
    return null;
  }

  return (
    <View pointerEvents="none" style={styles.wrapper}>
      <View style={styles.banner}>
        <Text style={styles.text}>No connection</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 100,
  },
  banner: {
    backgroundColor: '#B42318',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600',
  },
});
