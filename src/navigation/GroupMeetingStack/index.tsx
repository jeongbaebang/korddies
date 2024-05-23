import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { ScreenNames } from '@navigation/screenNames';
import GroupMeetingDetailScreen from '@modules/groupMeeting/screens/GroupMeetingDetailScreen';
import GroupMeetingScreen from '@modules/groupMeeting/screens/GroupMeetingScreen';
import GroupMeetingScreenHeader from '@modules/groupMeeting/screens/ScreenHeader';

export type NativeStackParamList = {
  [ScreenNames.GROUP_MEETING]: undefined;
  [ScreenNames.GROUP_MEETING_DETIAL]: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

const options: Record<string, NativeStackNavigationOptions> = {
  [ScreenNames.GROUP_MEETING]: {
    header: GroupMeetingScreenHeader,
  },
  [ScreenNames.GROUP_MEETING_DETIAL]: {},
  StackNavigator: {
    headerShadowVisible: false,
  },
};

const GroupMeetingStack = () => {
  return (
    <Stack.Navigator screenOptions={options.StackNavigator}>
      <Stack.Screen
        name={ScreenNames.GROUP_MEETING}
        component={GroupMeetingScreen}
        options={options[ScreenNames.GROUP_MEETING]}
      />
      <Stack.Screen
        name={ScreenNames.GROUP_MEETING_DETIAL}
        component={GroupMeetingDetailScreen}
        options={options[ScreenNames.GROUP_MEETING_DETIAL]}
      />
    </Stack.Navigator>
  );
};

export default GroupMeetingStack;
