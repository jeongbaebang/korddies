import { StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { sizeConverter } from '@shared/constants/designSystem';

const RightActionArea: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: sizeConverter(19),
    justifyContent: 'center',
  },
});

export default RightActionArea;
