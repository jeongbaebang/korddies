import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';

import MyMeetingsSection from './sections/MyMeetingsSection';
import GroupMeetingScreenHeader from './sections/ScreenHeader';
import MeetingListSectionBlock from './sections/MeetingListSectionBlock';
import { EventListSection } from './sections/EventSection';

const GroupMeetingScreen = () => {
  return (
    <View style={styles.container}>
      <GroupMeetingScreenHeader />
      <ScrollView>
        <EventListSection />
        <MyMeetingsSection />
        <MeetingListSectionBlock />
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
