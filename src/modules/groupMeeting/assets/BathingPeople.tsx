import { StyleSheet, View } from 'react-native';
import React from 'react';

import { sizeConverter } from '@shared/constants/designSystem';
import SpaSVG from './svg/SpaSVG';

const BathingPeople = () => {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <SpaSVG />
      </View>
    </View>
  );
};

export default BathingPeople;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  svgContainer: {
    width: sizeConverter(66),
  },
});
