import { View, StyleSheet } from 'react-native';
import React from 'react';

import { sizeConverter } from '@shared/constants/designSystem';
import KoreanWomanSVG from './KoreanWomanSVG';
import KoreaManSVG from './KoreaManSVG';

const ManWomanSVG = () => {
  const leftStyle = { marginTop: sizeConverter(7) };

  return (
    <>
      <View style={[styles.item, leftStyle]}>
        <KoreanWomanSVG />
      </View>
      <View style={styles.item}>
        <KoreaManSVG />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    width: sizeConverter(28),
  },
});

export default ManWomanSVG;
