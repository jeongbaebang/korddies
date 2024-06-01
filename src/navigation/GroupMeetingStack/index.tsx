import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { ScreenNames } from '@navigation/screenNames';
import GroupMeetingScreen from '@modules/groupMeeting/screens/GroupMeetingScreen';
import type { GroupMeetingStackParamList } from '@navigation/types';
import GroupMeetingEventDetailScreen from '@modules/groupMeeting/screens/GroupMeetingEventDetailScreen';

const Stack = createNativeStackNavigator<GroupMeetingStackParamList>();

const options: Record<string, NativeStackNavigationOptions> = {
  [ScreenNames.GROUP_MEETING]: {},
  [ScreenNames.GROUP_MEETING_EVENT_DETAIL]: {},
  StackNavigator: {
    headerShown: false,
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
        name={ScreenNames.GROUP_MEETING_EVENT_DETAIL}
        component={GroupMeetingEventDetailScreen}
        options={options[ScreenNames.GROUP_MEETING_EVENT_DETAIL]}
      />
    </Stack.Navigator>
  );
};

export default GroupMeetingStack;
