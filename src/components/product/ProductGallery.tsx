import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

type Props = {
  images: string[];
};

export default function ProductGallery({ images }: Props) {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const validImages = useMemo(
    () => (images && images.length > 0 ? images : []),
    [images],
  );

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const nextIndex = Math.round(offsetX / width);
    setActiveIndex(nextIndex);
  };

  if (validImages.length === 0) {
    return (
      <View style={[styles.emptyContainer, { width }]}>
        <Text style={styles.emptyText}>No images</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={validImages}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => `${item}-${index}`}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Image
              source={{ uri: item }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
      />

      <View style={styles.dotsContainer}>
        {validImages.map((_, index) => (
          <View
            key={`dot-${index}`}
            style={[styles.dot, index === activeIndex && styles.dotActive]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    height: 280,
    backgroundColor: '#F4F4F4',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.55)',
  },
  dotActive: {
    width: 18,
    backgroundColor: '#FFFFFF',
  },
  emptyContainer: {
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
  },
  emptyText: {
    color: '#666',
  },
});
