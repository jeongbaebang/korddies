import { StyleSheet, View } from 'react-native';
import React from 'react';

import MessageText from './MessageText';
import MessageInfo from './MessageInfo';
import MessageUserName from './MessageUserName';
import MessageAvatar from './MessageAvatar';

type Props = {
  data: {
    image: string;
    name: string;
    message: string;
    time: string;
    people: number;
  };
};

const ChatMessage: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.outerContainer}>
      {/* 사용자 이미지 */}
      <MessageAvatar />
      {/* 텍스트와 메시지 정보 */}
      <View style={styles.contentContainer}>
        <MessageUserName userName={data.name} />
        <View style={styles.messageRow}>
          <MessageText message={data.message} tail={true} />
          <MessageInfo time={data.time} people={data.people} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  messageRow: {
    flexDirection: 'row',
  },
  outerContainer: {
    flexDirection: 'row',
  },
});

export default ChatMessage;
