import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import HomeStack from '../HomeStack';
import { ScreenNames } from '../screenNames';
import MomentsScreen from '../../modules/moments/screens/MomentsScreen';
import ChatScreen from '../../modules/chat/screens/ChatScreen';
import ProfileScreen from '../../modules/profile/screens/ProfileScreen';

type BottomTabParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.MOMENTS]: undefined;
  [ScreenNames.CHAT]: undefined;
  [ScreenNames.MY_PROFILE]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const options: Record<string, BottomTabNavigationOptions> = {
  [ScreenNames.HOME]: {
    tabBarLabel: '홈',
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
    tabBarAllowFontScaling: true,
    tabBarStyle: {
      shadowColor: '#000', // 쉐도우 색상
      shadowOffset: { width: 0, height: -4 }, // 쉐도우 오프셋 (상단에만 적용)
      shadowOpacity: 0.1, // 쉐도우 불투명도
      shadowRadius: 10, // 쉐도우 반경
      elevation: 4, // 안드로이드에서의 쉐도우 효과
      borderTopWidth: 0, // 상단 테두리 제거
      backgroundColor: '#fff', // 탭 바 배경색
    },
    tabBarLabelStyle: {},
  },
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={options.TabNavigator}
      detachInactiveScreens={false}>
      <Tab.Screen
        name={ScreenNames.HOME}
        component={HomeStack}
        options={options[ScreenNames.HOME]}
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
