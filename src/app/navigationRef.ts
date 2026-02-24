import { createNavigationContainerRef } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigateToProduct(productId: string) {
  if (navigationRef.isReady()) {
    navigationRef.navigate('ProductDetail', { productId });
  }
}
