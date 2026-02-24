import React from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import { useConnectivity } from '../context/ConnectivityContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { isOffline, setOffline } = useConnectivity();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vinobuzz Prototype App By Danny</Text>

      <View style={styles.actions}>
        <Button
          title="Go to sample product"
          onPress={() =>
            navigation.navigate('ProductDetail', { productId: '123' })
          }
        />
      </View>

      <View style={styles.toggleRow}>
        <Text style={styles.toggleLabel}>Simulate offline</Text>
        <Switch value={isOffline} onValueChange={setOffline} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  actions: {
    width: '100%',
    marginBottom: 24,
  },
  toggleRow: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#DDD',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleLabel: {
    fontSize: 15,
    color: '#222',
    fontWeight: '500',
  },
});
