import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { convertToResponsiveStyle } from '@shared/constants/designSystem';

export type MyButtonProps = {
  onPress: () => void;
  text: string;
};

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const color = {
  font: 'white',
  container: {
    background: 'purple',
  },
};

const styles = StyleSheet.create({
  container: convertToResponsiveStyle({
    backgroundColor: color.container.background,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  }),
  text: {
    color: color.font,
  },
});
