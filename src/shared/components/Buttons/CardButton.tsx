import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { convertToResponsiveStyle } from '@shared/constants/designSystem';

type Props = {
  onPress: () => void;
  text: string;
  style: {
    font: TextStyle;
    container: ViewStyle;
  };
};

const CardButton: React.FC<Props> = ({ onPress, text, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style.container]}
      onPress={onPress}>
      <Text style={style.font}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: convertToResponsiveStyle({
    borderRadius: 8,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});

export default CardButton;
export { type Props as CardButtonProps };
