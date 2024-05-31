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

const Stack = createNativeStackNavigator<RootStackParamList>();

// TODO: 파일 분리
const navigationTheme: { [Key in 'dark' | 'light']: Theme } = {
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: 'pink',
    },
  },
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(246, 246, 246)',
    },
  },
};

const options: Record<string, NativeStackNavigationOptions> = {
  [ScreenNames.WITH_BOTTOM_TABS]: {
    headerShown: false,
  },
};
const MainNavigation = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer
      theme={scheme === 'dark' ? navigationTheme.dark : navigationTheme.light}>
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
