import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

import { Icon, IconType } from '../Icons';
import { sizeConverter } from '@shared/constants/designSystem';

type Props = {
  color: string;
  onPress?: () => void;
  size: number;
  style?: StyleProp<ViewStyle>;
  type: IconType;
};

const ActionIconButton: React.FC<Props> = ({ onPress, style, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.actionButton, style]}>
      <Icon {...props} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    alignItems: 'center',
    aspectRatio: 1.0,
    justifyContent: 'center',
    width: sizeConverter(24),
  },
});

export default ActionIconButton;
export type { Props as ActionButtonProps };
