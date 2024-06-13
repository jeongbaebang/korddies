import { StyleSheet, View } from 'react-native';
import React from 'react';

import { ChatHeaderSection } from './sections/HeaderSection';
import { ChatListSection } from './sections/ChatSection';

const GroupMeetingDetailChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatHeaderSection />
      <ChatListSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GroupMeetingDetailChatScreen;
