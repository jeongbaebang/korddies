import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  sizeConverter,
  convertToResponsiveStyle,
} from '@shared/constants/designSystem';

type Props = {
  uri: string;
  nickname: string;
  status: string;
};

const DetailPeopleItem: React.FC<Props> = ({ uri, nickname, status }) => {
  const { font } = {
    font: {
      nickname: {
        color: '#1B1A57',
        fontSize: sizeConverter(15),
      },
      status: {
        color: '#4F5E7B',

        fontSize: sizeConverter(11),
      },
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.userImageNicknameContainer}>
          <Image style={styles.userImage} source={{ uri }} />
          <View style={styles.userNicknameContainer}>
            <Text style={font.nickname}>{nickname}</Text>
          </View>
        </View>
        <View style={styles.userStatusContainer}>
          <Text style={font.status}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    minHeight: sizeConverter(40),
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImage: convertToResponsiveStyle({
    aspectRatio: 1,
    borderRadius: 13,
    width: 40,
  }),
  userImageNicknameContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    gap: sizeConverter(15),
  },
  userNicknameContainer: {
    flex: 1,
  },
  userStatusContainer: {
    justifyContent: 'center',
    paddingHorizontal: sizeConverter(13),
  },
});

export default DetailPeopleItem;
export { type Props as DetailPeopleItemProps };
