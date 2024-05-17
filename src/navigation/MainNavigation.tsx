import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './BottomTabs';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default MainNavigation;
