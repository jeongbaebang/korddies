import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { GroupMeetingDetailScreenHeader } from './sections/ScreenHeader';
import DetailSection from './sections/DetailSection/DetailSection';
import { cardImage01 } from '../mock/myMeetingCardItems';

const GroupMeetingDetailScreen = () => {
  return (
    <View style={styles.container}>
      <GroupMeetingDetailScreenHeader
        onBackPress={() => {}}
        imageURI={cardImage01}
      />
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
