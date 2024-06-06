import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import DetailSection from './sections/DetailSection/DetailSection';
import { ScreenNames } from '@navigation/screenNames';
import { RootStackScreenProps } from '@navigation/types';
import { DetailHeaderSection } from './sections/HeaderSection';

type Props = RootStackScreenProps<ScreenNames.GROUP_MEETING_DETAIL>;

const GroupMeetingDetailScreen = (_props: Props) => {
  return (
    <View style={styles.container}>
      <DetailHeaderSection />
      <ScrollView>
        <DetailSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GroupMeetingDetailScreen;
