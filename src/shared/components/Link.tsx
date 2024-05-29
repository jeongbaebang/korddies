import React, { ComponentType } from 'react';
import { Pressable } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import type { AllParamList } from '@navigation/types';

type ComponentProps<P> = P & JSX.IntrinsicAttributes;

/**
 * @see https://github.com/jeongbaebang/korddies/wiki/Docs#link-hoc
 */
const Link = <P, L extends keyof AllParamList>(
  Component: ComponentType<P>,
  link: L,
  screenParams?: AllParamList[L],
) => {
  return function HOC_Link(props: ComponentProps<P>) {
    const navigation = useNavigation<NavigationProp<AllParamList>>();

    const navigateToScreen = () => {
      // @ts-ignore
      navigation.navigate(link, screenParams);
    };

    return (
      <Pressable onPress={navigateToScreen} testID="TestID_Link">
        <Component {...props} />
      </Pressable>
    );
  };
};

export default Link;
