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
  fullWidth?: boolean;
};

const WithIcon: React.FC<Props> = ({
  style: { gap, icon, font },
  contentText,
  iconType,
  fullWidth,
}) => {
  return (
    <View
      style={[styles.container, { gap, minHeight: sizeConverter(icon.size) }]}>
      <Icon {...icon} type={iconType} />
      <Text style={[fullWidth && styles.fullWidth, font]}>{contentText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    flex: 1,
  },
});

export default WithIcon;
export type { Style as WithIconStyle };
