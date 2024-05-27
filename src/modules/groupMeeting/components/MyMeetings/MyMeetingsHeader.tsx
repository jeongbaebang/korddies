import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';

import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';

type Props = {
  leftText: string;
  rightText: string;
};

const MyMeetingsHeader: React.FC<Props> = (props) => {
  const { font } = {
    font: {
      left: {
        fontSize: sizeConverter(15),
        fontWeight: 'bold',
        color: '#1B1A57',
      } as TextStyle,
      right: {
        fontSize: sizeConverter(11),
        color: '#DC3644',
      } as TextStyle,
    },
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.contentContainer}>
          <Text style={font.left}>{props.leftText}</Text>
          <Text style={font.right}>{props.rightText}</Text>
        </View>
      </View>
    </View>
  );
};

export default MyMeetingsHeader;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  innerContainer: {
    marginHorizontal: sizeConverter(20),
  },
  outerContainer: convertToResponsiveStyle({
    height: 42,
    justifyContent: 'center',
  }),
});
