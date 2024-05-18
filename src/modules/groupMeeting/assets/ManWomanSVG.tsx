import { View, StyleSheet } from 'react-native';
import React from 'react';

import {
  converteToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';
import KoreanWomanSVG from './KoreanWomanSVG';
import KoreaManSVG from './KoreaManSVG';

const ManWomanSVG = () => {
  const leftStyle = { marginTop: sizeConverter(7) };

  return (
    <View style={styles.rightContentContainer}>
      <View style={[styles.imageItem, leftStyle]}>
        <KoreanWomanSVG />
      </View>
      <View style={styles.imageItem}>
        <KoreaManSVG />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageItem: {
    width: sizeConverter(28),
  },
  rightContentContainer: converteToResponsiveStyle({
    flexDirection: 'row',
    gap: 4,
    height: 77,
    width: 61,
  }),
});

export default ManWomanSVG;
