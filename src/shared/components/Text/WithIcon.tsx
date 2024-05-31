import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon, IconType } from '../Icons';
import { sizeConverter } from '@shared/constants/designSystem';

type Style = {
  gap: number;
  icon: {
    size: number;
    color: string;
  };
  font: {
    color: string;
    fontSize: number;
  };
};

type Props = {
  style: Style;
  iconType: IconType;
  contentText: string;
};

const WithIcon: React.FC<Props> = ({
  style: { gap, icon, font },
  contentText,
  iconType,
}) => {
  return (
    <View
      style={[styles.container, { gap, minHeight: sizeConverter(icon.size) }]}>
      <Icon {...icon} type={iconType} />
      <Text style={font}>{contentText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default WithIcon;
export type { Style as WithIconStyle };
