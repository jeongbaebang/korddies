import { StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

import { convertToResponsiveStyle } from '@shared/constants/designSystem';

const LeftActionArea: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: convertToResponsiveStyle({
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: -7,
    paddingRight: 10,
  }),
});

export default LeftActionArea;
