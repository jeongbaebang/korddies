import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { Icon, IconType } from '@shared/components/Icons';
import { CardButton } from '@shared/components/Buttons';

type Props = {
  title: string;
  time: string;
  users: string;
  address: string;
  description: string;
  onPress: () => void;
};

const DetailInfoCard: React.FC<Props> = (payload) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <TitleContent text={payload.title} />
        <View style={styles.contentContainer}>
          {/* 시간, 인원수 */}
          <TimeAndUser time={payload.time} users={payload.users} />
          {/* 주소 */}
          <Address text={payload.address} />
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
    <View style={titleStyles.container}>
      <Text style={font}>{text}</Text>
    </View>
  );
};

const TimeAndUser: React.FC<{ time: string; users: string }> = ({
  time,
  users,
}) => {
  const { icon, font } = {
    icon: {
      color: '#1B1A57',
      size: 16,
    },
    font: {
      color: '#4F5E7B',
      fontSize: 15,
    } as TextStyle,
  };

  return (
    <View style={timeAndUserStyles.container}>
      <View style={timeAndUserStyles.contentContainer}>
        <Icon type={IconType.Clock} {...icon} />
        <Text style={font}>{time}</Text>
      </View>
      <View style={timeAndUserStyles.contentContainer}>
        <Icon type={IconType.UserGroup} {...icon} />
        <Text style={font}>{users}</Text>
      </View>
    </View>
  );
};

const Address: React.FC<{ text: string }> = ({ text }) => {
  const { icon, font } = {
    icon: {
      color: '#1B1A57',
      size: 16,
    },
    font: {
      color: '#4F5E7B',
      fontSize: 15,
    } as TextStyle,
  };

  return (
    <View style={addressStyles.container}>
      <View style={addressStyles.contentContainer}>
        <Icon type={IconType.LocationDot} {...icon} />
        <Text style={font}>{text}</Text>
      </View>
    </View>
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
    <View style={[descriptionStyles.container, color]}>
      <Text style={font}>{text}</Text>
    </View>
  );
};

const timeAndUserStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 25,
    height: 20,
  },
  contentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});

const addressStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    minHeight: 20,
  },
  contentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});

const descriptionStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    minHeight: 92,
    padding: 13,
  },
});

const titleStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 62,
  },
});

const styles = StyleSheet.create({
  contentContainer: {
    gap: 20,
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
});

export default DetailInfoCard;
export type { Props as DetailInfoCardProps };
