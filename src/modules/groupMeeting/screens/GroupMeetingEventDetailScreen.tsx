import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import { GroupMeetingStackScreenProps } from '@navigation/types';
import { ScreenNames } from '@navigation/screenNames';
import { EventDetailSection } from './sections/EventSection/EventSectionBlock';
import ScreenHeader from './sections/ScreenHeader';
import MeetingListSectionBlock from './sections/MeetingListSectionBlock';

type Props =
  GroupMeetingStackScreenProps<ScreenNames.GROUP_MEETING_EVENT_DETAIL>;

const GroupMeetingEventDetailScreen: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const onBackPressHandler = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader canGoBack onBackPress={onBackPressHandler} />
      <ScrollView style={styles.container}>
        <EventDetailSection type={route.params.cardType} />
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

export default GroupMeetingEventDetailScreen;
