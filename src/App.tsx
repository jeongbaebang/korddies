import React from 'react';
import { NODE_ENV, STORYBOOK } from '@env';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  return <MainNavigation />;
};

let AppEntryPoint = App;

if (NODE_ENV !== 'production' && STORYBOOK === 'true') {
  AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;
