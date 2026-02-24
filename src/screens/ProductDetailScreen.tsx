import React, { useEffect, useMemo, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import { getMockProductById } from '../data/mockProducts';
import ProductSkeleton from '../components/product/ProductSkeleton';
import { formatPrice } from '../utils/formatPrice';
import ProductGallery from '../components/product/ProductGallery';
import ExpandableSection from '../components/product/ExpandableSection';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

export default function ProductDetailScreen({ route }: Props) {
  const { productId } = route.params;

  const product = useMemo(() => getMockProductById(productId), [productId]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

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
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ProductGallery images={product.images} />

        <View style={styles.body}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>
            {formatPrice(product.price, product.currency)}
          </Text>

          <Text style={styles.sectionLabel}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>

          <ExpandableSection
            title="Tasting notes"
            content={product.tastingNotes}
            defaultExpanded
          />
        </View>
      </ScrollView>

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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 110, // reserve space for sticky CTA
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  body: {
    padding: 16,
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
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#333',
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
