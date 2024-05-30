import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { sizeConverter } from '@shared/constants/designSystem';

type Props = {
  uri: string;
};

const DetailHeader: React.FC<Props> = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={{ uri }} />
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  container: {
    height: sizeConverter(121),
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
