import { StyleSheet, View } from 'react-native';
import React from 'react';

import KoreanWomanSVG from './svg/KoreanWomanSVG';
import { sizeConverter } from '@shared/constants/designSystem';
import KoreaManSVG from './svg/KoreaManSVG';

const KoreanManWoman = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.svgContainer, styles.womanMarginTop]}>
        <KoreanWomanSVG />
      </View>
      <View style={styles.svgContainer}>
        <KoreaManSVG />
      </View>
    </View>
  );
};

export default KoreanManWoman;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: sizeConverter(2),
    justifyContent: 'center',
  },
  svgContainer: {
    width: sizeConverter(25),
  },
  womanMarginTop: {
    marginTop: sizeConverter(10),
  },
});
