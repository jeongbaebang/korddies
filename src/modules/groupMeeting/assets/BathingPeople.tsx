import { StyleSheet, View } from 'react-native';
import React from 'react';

import {
  converteToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';
import SpaSVG from './svg/SpaSVG';

type Props = {
  fullWidth?: boolean;
};

const BathingPeople: React.FC<Props> = ({ fullWidth }) => {
  return (
    <View style={[styles.container, fullWidth ? styles.large : styles.medium]}>
      <SpaSVG />
    </View>
  );
};

export default BathingPeople;

const styles = StyleSheet.create({
  container: converteToResponsiveStyle({
    width: 115,
    alignSelf: 'center',
  }),
  large: {
    width: sizeConverter(115),
  },
  medium: {
    width: sizeConverter(84),
  },
});
