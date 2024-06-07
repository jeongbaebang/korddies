import { StyleSheet, View } from 'react-native';
import React from 'react';

import { ChatHeaderSection } from './sections/HeaderSection';

const GroupMeetingDetailChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatHeaderSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GroupMeetingDetailChatScreen;
