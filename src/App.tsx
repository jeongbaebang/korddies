import React from 'react';
import { View } from 'react-native';
import { NODE_ENV, STORYBOOK } from '@env';

const App = () => {
  return <View />;
};

let AppEntryPoint = App;

if (NODE_ENV !== 'production' && STORYBOOK === 'true') {
  AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;
