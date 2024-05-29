import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';

import EventListSection from './sections/EventListSection';
import MyMeetingsSection from './sections/MyMeetingsSection';
import MeetingListSection from './sections/MeetingListSection';
import GroupMeetingScreenHeader from './sections/ScreenHeader';

const GroupMeetingScreen = () => {
  return (
    <View style={styles.container}>
      <GroupMeetingScreenHeader />
      <ScrollView>
        <EventListSection />
        <MyMeetingsSection />
        <MeetingListSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GroupMeetingScreen;
