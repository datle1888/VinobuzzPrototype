import type { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '123',
    name: 'Pinot Noir Reserve 2021',
    price: 29.99,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
    ],
    tastingNotes:
      'Cherry, raspberry, soft spice, and a smooth finish with balanced acidity.',
    description:
      'A medium-bodied red wine with bright fruit notes and a smooth texture, ideal for dinner pairings and casual evenings.',
  },
];

export function getMockProductById(productId: string) {
  return MOCK_PRODUCTS.find(item => item.id === productId) ?? null;
}
