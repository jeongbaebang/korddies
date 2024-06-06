import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';

import { EventListSection } from './sections/EventSection';
import { MeetingListSection } from './sections/MeetingListSection';
import { MyMeetingsSection } from './sections/MyMeetingsSection';
import { HeaderSection } from './sections/HeaderSection';

const GroupMeetingScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderSection />
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
