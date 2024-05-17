import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { ScreenNames } from '@navigation/screenNames';
import GroupMeetingScreen from '@modules/groupMeeting/screens/GroupMeetingScreen';

export type NativeStackParamList = {
  [ScreenNames.GROUP_MEETING]: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

const options: Record<string, NativeStackNavigationOptions> = {
  [ScreenNames.GROUP_MEETING]: {
    headerShown: false,
    statusBarTranslucent: true,
  },
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.GROUP_MEETING}
        component={GroupMeetingScreen}
        options={options[ScreenNames.GROUP_MEETING]}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
