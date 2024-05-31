/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { IconType } from '@shared/components/Icons';
import { CardButton } from '@shared/components/Buttons';
import { WithIcon, WithIconStyle } from '@shared/components/Text';
import { sizeConverter } from '@shared/constants/designSystem';

type Props = {
  title: string;
  time: string;
  users: string;
  address: string;
  description: string;
  onPress: () => void;
};

const DetailInfoCard: React.FC<Props> = (payload) => {
  const { innerStyle } = {
    innerStyle: {
      backgroundColor: '#FFFFFF',
    },
  };

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.innerContainer, innerStyle]}>
        <TitleContent text={payload.title} />
        <View style={styles.contentContainer}>
          {/* 시간, 인원수, 주소 */}
          <Information
            time={payload.time}
            users={payload.users}
            address={payload.address}
          />
          {/* 버튼 */}
          <JoinChatButton onPress={payload.onPress} />
          {/* 메모 */}
          <Description text={payload.description} />
        </View>
      </View>
    </View>
  );
};

const TitleContent: React.FC<{ text: string }> = ({ text }) => {
  const { font } = {
    font: {
      color: '#1B1A57',
      fontSize: 18,
      fontWeight: 'bold',
    } as TextStyle,
  };

  return (
    <View style={styles.titleContainer}>
      <Text style={font}>{text}</Text>
    </View>
  );
};

type InformationProps = {
  time: string;
  users: string;
  address: string;
};

const Information: React.FC<InformationProps> = ({ time, users, address }) => {
  const withIconStyle = {
    gap: sizeConverter(10),
    font: {
      color: '#4F5E7B',
      fontSize: 15,
    },
    icon: {
      color: '#1B1A57',
      size: 16,
    },
  } as WithIconStyle;

  return (
    <>
      <View style={styles.timeAndUserContainer}>
        {/* 모임 시간 */}
        <WithIcon
          style={withIconStyle}
          contentText={time}
          iconType={IconType.Clock}
        />
        {/* 모임 인원 */}
        <WithIcon
          style={withIconStyle}
          contentText={users}
          iconType={IconType.UserGroup}
        />
      </View>
      <View style={styles.addressContainer}>
        {/* 모임 정보 */}
        <WithIcon
          style={withIconStyle}
          contentText={address}
          iconType={IconType.LocationDot}
        />
      </View>
    </>
  );
};

const JoinChatButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  const { text, style } = {
    text: '채팅 참여하기',
    style: {
      font: {
        color: '#2F80ED',
        fontSize: 15,
      },
      container: {
        backgroundColor: '#EAF3FF',
      },
    },
  };

  return <CardButton onPress={onPress} text={text} style={style} />;
};

const Description: React.FC<{ text: string }> = ({ text }) => {
  const { color, font } = {
    color: {
      backgroundColor: '#F9F9F9',
    },
    font: {
      color: '#4F5E7B',
      fontSize: 15,
    } as TextStyle,
  };

  return (
    <View style={[styles.descriptionContainer, color]}>
      <Text style={font}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    alignItems: 'center',
    backgroundColor: 'pink',
    flexDirection: 'row',
    marginRight: sizeConverter(5),
  },
  contentContainer: {
    gap: 20,
  },
  descriptionContainer: {
    borderRadius: 10,
    minHeight: 92,
    padding: 13,
  },
  innerContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  outerContainer: {
    minHeight: 320,
  },
  timeAndUserContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 25,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 62,
  },
});

export default DetailInfoCard;
export type { Props as DetailInfoCardProps };
