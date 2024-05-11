import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

let AppEntryPoint = App;

if (true) {
  AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;
