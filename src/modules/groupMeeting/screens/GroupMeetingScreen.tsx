import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import EventListSection from './sections/EventListSection';
import MyMeetingsSection from './sections/MyMeetingsSection';
import MeetingListSection from './sections/MeetingListSection';
// import { ScreenNames } from '@navigation/screenNames';
// import { GroupMeetingStackScreenProps } from '@navigation/types';

// type ScreenProps = GroupMeetingStackScreenProps<ScreenNames.GROUP_MEETING>;

//{ navigation }: ScreenProps

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
