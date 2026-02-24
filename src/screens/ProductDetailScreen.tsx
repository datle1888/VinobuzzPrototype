import React, { useEffect, useMemo, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import { getMockProductById } from '../data/mockProducts';
import ProductSkeleton from '../components/product/ProductSkeleton';
import { formatPrice } from '../utils/formatPrice';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

export default function ProductDetailScreen({ route }: Props) {
  const { productId } = route.params;

  const product = useMemo(() => getMockProductById(productId), [productId]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [productId]);

  if (loading) {
    return <ProductSkeleton />;
  }

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>Product not found</Text>
        <Text style={styles.subtitle}>ID: {productId}</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.galleryPlaceholder}>
          <Text style={styles.galleryText}>Gallery (next step)</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>
            {formatPrice(product.price, product.currency)}
          </Text>

          <Text style={styles.sectionLabel}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>

          <Text style={styles.sectionLabel}>Tasting Notes</Text>
          <Text style={styles.description}>{product.tastingNotes}</Text>
        </View>
      </View>

      <View style={styles.stickyCta}>
        <Button title="Add to Cart" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
  },
  galleryPlaceholder: {
    height: 280,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DDD',
  },
  galleryText: {
    color: '#666',
    fontSize: 14,
  },
  body: {
    padding: 16,
    paddingBottom: 100, // reserve space for sticky CTA
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#7A1E1E',
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#333',
    marginTop: 8,
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
  stickyCta: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#DDD',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
});
