import { View, StyleSheet } from 'react-native';
import React from 'react';

import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';
import KoreanWomanSVG from './svg/KoreanWomanSVG';
import KoreaManSVG from './svg/KoreaManSVG';

const KoreanManWoman = () => {
  const leftStyle = { marginTop: sizeConverter(8) };

  return (
    <View style={[styles.container, styles.medium]}>
      <View style={[styles.mediumItem, leftStyle]}>
        <KoreanWomanSVG />
      </View>
      <View style={styles.mediumItem}>
        <KoreaManSVG />
      </View>
    </View>
  );
};

const KoreanManWomanFullWidth = () => {
  const left = styles.left;
  const right = styles.right;

  return (
    <View style={[styles.container, styles.large]}>
      <View style={[styles.LargeItem, { marginTop: left.marginTop }]}>
        <KoreanWomanSVG height={left.height} />
      </View>
      <View style={[styles.LargeItem, { marginTop: right.marginTop }]}>
        <KoreaManSVG height={right.height} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LargeItem: {
    width: sizeConverter(40),
  },
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  large: convertToResponsiveStyle({
    gap: 8,
    width: 85,
  }),
  left: convertToResponsiveStyle({
    height: 98,
    marginTop: -15,
  }),
  medium: convertToResponsiveStyle({
    gap: 4,
    width: 61,
  }),
  mediumItem: {
    width: sizeConverter(28),
  },
  right: convertToResponsiveStyle({
    height: 106,
    marginTop: -23,
  }),
});

export { KoreanManWoman, KoreanManWomanFullWidth };
