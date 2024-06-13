import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  userName: string;
};

const MessageUserName: React.FC<Props> = ({ userName }) => {
  const { userNameText } = {
    userNameText: {
      color: '#8D97B0',
      fontSize: 11,
    },
  };

  return (
    <View style={styles.userName}>
      <Text style={userNameText}>{userName}</Text>
    </View>
  );
};

export default MessageUserName;

const styles = StyleSheet.create({
  userName: {
    justifyContent: 'center',
    marginBottom: 4,
    marginLeft: 5,
    minHeight: 12,
  },
});
