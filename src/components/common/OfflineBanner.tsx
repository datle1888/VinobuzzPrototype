import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useConnectivity } from '../../context/ConnectivityContext';

export default function OfflineBanner() {
  const { isOffline } = useConnectivity();

  if (!isOffline) {
    return null;
  }

  return (
    <View pointerEvents="none" style={styles.wrapper}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.banner}>
          <Text style={styles.text}>No connection</Text>
        </View>
      </SafeAreaView>
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
  safeArea: {
    backgroundColor: '#B42318',
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
