import {
  ImageBackground,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';

import { convertToResponsiveStyle } from '@shared/constants/designSystem';

type Props = {
  uri: string;
  title: string;
};

const MyMeetingCard: React.FC<Props> = (props) => {
  const { color, font } = {
    color: {
      backgroundColor: 'rgba(0, 0, 0, 0.30)',
      shadowColor: 'rgba(0, 0, 0, 0.250980406999588)',
      elevation: props.uri ? 18 : undefined,
    },
    font: {
      color: '#FFFFFF',
      fontSize: 11,
      fontWeight: 'bold',
    } as TextStyle,
  };

  return (
    <View style={[styles.container, color]}>
      <ImageBackground
        source={{ uri: props.uri }}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.textContainer}>
          <Text style={font} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: convertToResponsiveStyle({
    borderRadius: 10,
    height: 100,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    width: 80,
  }),
  image: convertToResponsiveStyle({
    borderRadius: 10,
    flex: 1,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    padding: 9,
  }),
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyMeetingCard;
export type { Props as MyMeetingCardProps };
