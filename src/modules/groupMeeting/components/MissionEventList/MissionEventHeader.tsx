import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';

import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';

type Props = {
  text: string;
};

const MissionEventHeader: React.FC<Props> = (props) => {
  const { title } = {
    title: {
      font: {
        fontSize: sizeConverter(15),
        fontWeight: 'bold',
        color: '#1B1A57',
      } as TextStyle,
    },
  };
  return (
    <View style={styles.container}>
      <Text style={title.font}>{props.text}</Text>
    </View>
  );
};

export default MissionEventHeader;

const styles = StyleSheet.create({
  container: convertToResponsiveStyle({
    minHeight: 31,
    justifyContent: 'center',
    paddingHorizontal: 20,
  }),
});
