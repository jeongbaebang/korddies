import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { GroupMeetingDetailScreenHeader } from './sections/ScreenHeader';
import DetailSection from './sections/DetailSection/DetailSection';
import { cardImage01 } from '../mock/myMeetingCardItems';
import { ScreenNames } from '@navigation/screenNames';
import { RootStackScreenProps } from '@navigation/types';

type Props = RootStackScreenProps<ScreenNames.GROUP_MEETING_DETAIL>;

const GroupMeetingDetailScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <GroupMeetingDetailScreenHeader
        onBackPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
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
