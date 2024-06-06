import { StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';

type Props = PropsWithChildren & { safeArea?: boolean };

const ScreenHeaderLayout: React.FC<Props> = ({ children, safeArea = true }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        { marginTop: safeArea ? insets.top : undefined },
        styles.outerContainer,
      ]}>
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};
export default ScreenHeaderLayout;

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: sizeConverter(22),
  },
  outerContainer: convertToResponsiveStyle({
    justifyContent: 'center',
    maxHeight: 150,
    minHeight: 60,
  }),
});
