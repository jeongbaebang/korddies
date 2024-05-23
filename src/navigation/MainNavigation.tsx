import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { ScreenNames } from '@navigation/screenNames';
import BottomTabs from '@navigation/BottomTabs';

export type NativeStackParamList = {
  [ScreenNames.WITH_BOTTOM_TABS]: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

const options: Record<string, NativeStackNavigationOptions> = {
  [ScreenNames.WITH_BOTTOM_TABS]: {
    headerShown: false,
  },
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.WITH_BOTTOM_TABS}
          component={BottomTabs}
          options={options[ScreenNames.WITH_BOTTOM_TABS]}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
