import type { LinkingOptions } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['vinobuzz://'],
  config: {
    screens: {
      Home: '',
      ProductDetail: 'product/:productId',
    },
  },
};
