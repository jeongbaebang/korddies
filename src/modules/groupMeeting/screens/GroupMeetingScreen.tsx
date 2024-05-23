/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React from 'react';
import { ScreenNames } from '@navigation/screenNames';

const GroupMeetingScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>GroupMeetingScreen Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(ScreenNames.GROUP_MEETING_DETAIL)}
      />
    </View>
  );
};

export default GroupMeetingScreen;
