import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';

type Props = {
  people: number;
  time: string;
};

const MessageInfo: React.FC<Props> = ({ people, time }) => {
  const { userCountText, timeText } = {
    userCountText: {
      color: '#DC3644',
      fontSize: 11,
      fontWeight: 'bold',
    } as TextStyle,
    timeText: {
      color: '#8D97B0',
      fontSize: 11,
    },
  };

  return (
    <View style={styles.infoContainer}>
      <Text style={userCountText}>{people}</Text>
      <Text style={timeText}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    justifyContent: 'flex-end',
    marginHorizontal: 4,
    minWidth: 30,
  },
});

export default MessageInfo;
