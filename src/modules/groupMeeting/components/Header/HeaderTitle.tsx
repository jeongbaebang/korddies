import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { is } from 'ramda';

import { sizeConverter } from '@shared/constants/designSystem';

type Props = {
  title: string;
  style?: TextStyle;
  count?: number;
};

const HeaderTitle: React.FC<Props> = ({ title, style, count }) => {
  const options = {
    maxLine: 5,
    title: {
      color: '#1B1A57',
      fontSize: sizeConverter(18),
    },
    count: {
      color: '#4C5A76',
      fontSize: sizeConverter(18),
    },
  };

  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, options.title, style]}
        numberOfLines={options.maxLine}>
        {title}
      </Text>
      {is(Number, count) ? (
        <Text style={[styles.count, options.count]}>{count}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    gap: sizeConverter(7),
    justifyContent: 'center',
  },
  count: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default HeaderTitle;
