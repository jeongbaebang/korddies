import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';

import EventSectionBlock from './sections/EventSectionBlock';
import MyMeetingsSection from './sections/MyMeetingsSection';
import GroupMeetingScreenHeader from './sections/ScreenHeader';
import {
  MissionCardType,
  missionCardHeaderTitleMap,
} from '../assets/content/missionEventItems';
import { LinkMissionCard } from '../components/MissionEventList/MissionCard';
import MeetingListSectionBlock from './sections/MeetingListSectionBlock';

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

const EventListSection = () => {
  return (
    <EventSectionBlock
      headerTitle={missionCardHeaderTitleMap[MissionCardType.HOME]}
      cardKeys={[MissionCardType.KYUNGBOK, MissionCardType.KOREA_SPA]}
      RenderItem={LinkMissionCard}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GroupMeetingScreen;
