import {
  ImageBackground,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';

import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';

type Props = {
  uri: string;
  title: string;
};

const MyMeetingCard: React.FC<Props> = (props) => {
  const { container, title } = {
    container: {
      color: {
        backgroundColor: '#000000',
        shadowColor: 'rgba(0, 0, 0, 0.250980406999588)',
        elevation: props.uri ? 18 : 0,
      },
    },
    title: {
      font: {
        color: '#FFFFFF',
        fontSize: sizeConverter(11),
        fontWeight: 'bold',
      } as TextStyle,
      options: {
        maxLine: 2,
      },
    },
  };

  return (
    <View style={[styles.container, container.color]}>
      <ImageBackground
        source={{ uri: props.uri }}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.textContainer}>
          <Text style={title.font} numberOfLines={title.options.maxLine}>
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
