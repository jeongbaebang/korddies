import React from 'react';

import HeaderBlock, { HeaderBlockProps } from './HeaderBlock';
import { useNavigation } from '@react-navigation/native';

/**
 * SERVER FETCH LAYERS
 */
const HeaderSection = () => {
  const { canGoBack, goBack } = useNavigation();
  const options: HeaderBlockProps = {
    title: 'Let’s hang out with Korddies',
    canGoBack: canGoBack(),
    onBackPress: () => {
      if (canGoBack()) {
        goBack();
      }
    },
  };

  return <HeaderBlock {...options} />;
};

export default HeaderSection;
