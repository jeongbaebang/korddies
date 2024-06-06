import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { sizeConverter } from '@shared/constants/designSystem';

type Props = {
  title: string;
  style?: TextStyle;
};

const HeaderTitle: React.FC<Props> = ({ title, style }) => {
  const options = {
    maxLine: 5,
  };
  const defaultStyle = { color: '#1B1A57', fontSize: sizeConverter(18) };

  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, defaultStyle, style]}
        numberOfLines={options.maxLine}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default HeaderTitle;
