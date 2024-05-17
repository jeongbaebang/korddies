import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { ScreenNames } from '@navigation/screenNames';
import BottomTabs from '@navigation/BottomTabs';

export type NativeStackParamList = {
  [ScreenNames.HOME]: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

const options: Record<string, NativeStackNavigationOptions> = {
  [ScreenNames.HOME]: {
    headerShown: false,
    statusBarTranslucent: true,
  },
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.HOME}
          component={BottomTabs}
          options={options[ScreenNames.HOME]}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
