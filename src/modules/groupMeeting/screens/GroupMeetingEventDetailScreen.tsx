import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import { GroupMeetingStackScreenProps } from '@navigation/types';
import { ScreenNames } from '@navigation/screenNames';
import { EventDetailSection } from './sections/EventSection/EventSectionBlock';
import { MeetingListSection } from './sections/MeetingListSection';
import { HeaderSection } from './sections/HeaderSection';

type Props =
  GroupMeetingStackScreenProps<ScreenNames.GROUP_MEETING_EVENT_DETAIL>;

const GroupMeetingEventDetailScreen: React.FC<Props> = ({ route }) => {
  return (
    <View style={styles.container}>
      <HeaderSection />
      <ScrollView>
        <EventDetailSection type={route.params.cardType} />
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

export default GroupMeetingEventDetailScreen;
