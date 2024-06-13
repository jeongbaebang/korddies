import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

type Props = {
  disable?: boolean;
};

const MessageAvatar: React.FC<Props> = ({ disable }) => {
  const defaultImageColor = {
    backgroundColor: 'gray',
  };

  return (
    <View style={styles.imageContainer}>
      {disable ? (
        <View style={styles.image} />
      ) : (
        <Image style={[defaultImageColor, styles.image]} />
      )}
    </View>
  );
};

export default MessageAvatar;

const styles = StyleSheet.create({
  image: {
    borderRadius: 13,
    height: 34,
    width: 34,
  },
  imageContainer: {
    alignSelf: 'flex-start',
    marginRight: 4,
  },
});
