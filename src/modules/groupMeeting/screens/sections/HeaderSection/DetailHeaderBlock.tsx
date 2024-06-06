import { ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { sizeConverter } from '@shared/constants/designSystem';
import {
  BackActionButton,
  LeftActionArea,
  ScreenHeaderLayout,
} from '@modules/groupMeeting/components/Header';

type Props = {
  onBackPress: () => void;
  imageURI: string;
};

const DetailHeaderBlock: React.FC<Props> = ({ onBackPress, imageURI }) => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={{ uri: imageURI }}
      style={[styles.container, { marginTop: insets.top }]}
      resizeMode="cover">
      <ScreenHeaderLayout safeArea={false}>
        <LeftActionArea>
          <BackActionButton onPress={onBackPress} />
        </LeftActionArea>
      </ScreenHeaderLayout>
    </ImageBackground>
  );
};

export default DetailHeaderBlock;

const styles = StyleSheet.create({
  container: {
    height: sizeConverter(130),
  },
});
