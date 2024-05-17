import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { ScreenNames } from '@navigation/screenNames';
import MomentsScreen from '@modules/moments/screens/MomentsScreen';
import ChatScreen from '@modules/chat/screens/ChatScreen';
import ProfileScreen from '@modules/profile/screens/ProfileScreen';
import { HouseIcon } from '@shared/components/Icons';
import GroupMeetingScreen from '@modules/groupMeeting/screens/GroupMeetingScreen';
import { Platform } from 'react-native';

type BottomTabParamList = {
  [ScreenNames.GROUP_MEETING]: undefined;
  [ScreenNames.MOMENTS]: undefined;
  [ScreenNames.CHAT]: undefined;
  [ScreenNames.MY_PROFILE]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const options: Record<string, BottomTabNavigationOptions> = {
  [ScreenNames.GROUP_MEETING]: {
    tabBarLabel: '홈',
    tabBarIcon: ({ color, size }) => <HouseIcon color={color} size={size} />,
  },
  [ScreenNames.MOMENTS]: {
    tabBarLabel: '모멘츠',
  },
  [ScreenNames.CHAT]: {
    tabBarLabel: '채팅',
  },
  [ScreenNames.MY_PROFILE]: {
    tabBarLabel: '내 프로필',
  },
  TabNavigator: {
    tabBarStyle: {
      shadowColor: '#000', // 쉐도우 색상
      shadowOpacity: 0.1, // 쉐도우 불투명도
      shadowRadius: 10, // 쉐도우 반경
      elevation: 24, // 안드로이드에서의 쉐도우 효과
      borderTopWidth: 0, // 상단 테두리 제거
    },
  },
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      safeAreaInsets={Platform.select({
        android: { bottom: 10 },
      })}
      initialRouteName={ScreenNames.GROUP_MEETING}
      screenOptions={options.TabNavigator}
      detachInactiveScreens={false}>
      <Tab.Screen
        name={ScreenNames.GROUP_MEETING}
        component={GroupMeetingScreen}
        options={options[ScreenNames.GROUP_MEETING]}
      />
      <Tab.Screen
        name={ScreenNames.MOMENTS}
        component={MomentsScreen}
        options={options[ScreenNames.MOMENTS]}
      />
      <Tab.Screen
        name={ScreenNames.CHAT}
        component={ChatScreen}
        options={options[ScreenNames.CHAT]}
      />
      <Tab.Screen
        name={ScreenNames.MY_PROFILE}
        component={ProfileScreen}
        options={options[ScreenNames.MY_PROFILE]}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
