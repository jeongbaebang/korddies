import React from 'react';
import HeaderBlock from './HeaderBlock';
import { useNavigation } from '@react-navigation/native';

const HeaderSection = () => {
  const title = 'Let’s hang out with Korddies';
  const navigation = useNavigation();
  const isCanGoBack = navigation.canGoBack();

  const handler = () => {
    if (isCanGoBack) {
      navigation.goBack();
    }
  };

  return (
    <HeaderBlock title={title} canGoBack={isCanGoBack} onBackPress={handler} />
  );
};

export default HeaderSection;
