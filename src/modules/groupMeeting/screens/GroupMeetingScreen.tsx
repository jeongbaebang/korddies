import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import EventListSection from './sections/EventListSection';
import MyMeetingsSection from './sections/MyMeetingsSection';
import MeetingListSection from './sections/MeetingListSection';

const GroupMeetingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <EventListSection />
      <MyMeetingsSection />
      <MeetingListSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GroupMeetingScreen;
