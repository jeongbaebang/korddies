import React from 'react';
import { useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { ScreenNames } from '@navigation/screenNames';
import BottomTabs from '@navigation/BottomTabs';
import type { RootStackParamList } from './types';
import GroupMeetingDetailScreen from '@modules/groupMeeting/screens/GroupMeetingDetailScreen';
import GroupMeetingDetailChatScreen from '@modules/groupMeeting/screens/GroupMeetingDetailChatScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

// TODO: 파일 분리
const navigationTheme: { [Key in 'dark' | 'light']: Theme } = {
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#2A2C38',
    },
  },
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#F6F6F6',
    },
  },
};

const options: Record<string, NativeStackNavigationOptions> = {
  [ScreenNames.WITH_BOTTOM_TABS]: {},
  [ScreenNames.GROUP_MEETING_DETAIL]: {},
  [ScreenNames.GROUP_MEETING_DETAIL_CHAT]: {},
  StackNavigator: {
    headerShown: false,
  },
};

const MainNavigation = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer
      theme={scheme === 'dark' ? navigationTheme.dark : navigationTheme.light}>
      <Stack.Navigator
        screenOptions={options.StackNavigator}
        initialRouteName={ScreenNames.GROUP_MEETING_DETAIL_CHAT}>
        <Stack.Screen
          name={ScreenNames.WITH_BOTTOM_TABS}
          component={BottomTabs}
          options={options[ScreenNames.WITH_BOTTOM_TABS]}
        />
        <Stack.Screen
          name={ScreenNames.GROUP_MEETING_DETAIL}
          component={GroupMeetingDetailScreen}
          options={options[ScreenNames.GROUP_MEETING_DETAIL]}
        />
        <Stack.Screen
          name={ScreenNames.GROUP_MEETING_DETAIL_CHAT}
          component={GroupMeetingDetailChatScreen}
          options={options[ScreenNames.GROUP_MEETING_DETAIL_CHAT]}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
