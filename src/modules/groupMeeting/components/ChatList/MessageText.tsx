import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import TailSVG from './MessageTail';
import { MAX_CHARS, sizeConverter } from '@shared/constants/designSystem';

type Props = {
  message: string;
  tail?: boolean;
};

const MessageText: React.FC<Props> = ({ message, tail = true }) => {
  const isLongText = message.length > MAX_CHARS;
  const { msgText } = {
    msgText: {
      backgroundColor: '#FFFFFF',
      color: '#222835',
      fontSize: sizeConverter(15),
    },
  };

  console.log(message.length);
  const Tail = (
    <View style={styles.tailContainer}>
      <TailSVG color={msgText.backgroundColor} {...styles.tail} />
    </View>
  );

  return (
    <View style={styles.messageContainer}>
      {tail ? Tail : null}
      <Text
        style={[
          styles.messageText,
          tail
            ? [styles.withTail, { marginRight: isLongText ? 1 : -5 }]
            : styles.withoutTail,
          msgText,
        ]}>
        {message}
      </Text>
    </View>
  );
};

export default MessageText;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    flexShrink: 1, // 줄어들 수 있도록 설정
  },
  messageText: {
    borderRadius: 13.5,
    flexWrap: 'wrap',
    overflow: 'hidden',
    paddingBottom: 8,
    paddingHorizontal: 10,
    paddingTop: 9,
  },
  tail: {
    height: 13,
    width: 9,
  },
  tailContainer: {
    top: 1,
  },
  withTail: {
    left: -5,
  },
  withoutTail: {
    marginLeft: 5,
  },
});
