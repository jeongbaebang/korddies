import React, { ComponentType } from 'react';
import { Pressable } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { AllParamList } from '@navigation/types';

type ComponentProps<P> = P & JSX.IntrinsicAttributes;

/**
 * Link 고차 컴포넌트 (HOC)
 *
 * Component - 네비게이션 링크로 변환할 컴포넌트
 *
 * link - 네비게이션할 스크린의 이름
 *
 * screenParams - 네비게이션할 때 전달할 매개변수
 *
 * returns - 네비게이션 링크로 변환된 컴포넌트
 */
const Link = <P, L extends keyof AllParamList>(
  Component: ComponentType<P>,
  link: L,
  screenParams?: AllParamList[L],
) => {
  /**
   * HOC_Link 컴포넌트
   *
   * props - 전달된 컴포넌트의 props
   *
   * returns - 네비게이션 기능이 추가된 컴포넌트
   */
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
