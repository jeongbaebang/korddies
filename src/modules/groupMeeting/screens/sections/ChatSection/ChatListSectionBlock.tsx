/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React from 'react';

const ChatListSectionBlock = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={{ minHeight: 58, backgroundColor: 'pink' }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    gap: 7,
    paddingVertical: 15,
  },
  outerContainer: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
});

export default ChatListSectionBlock;
