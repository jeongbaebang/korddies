import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render, screen, userEvent } from '@testing-library/react-native';

import Link from './Link';
import { Text } from 'react-native';
import { ScreenNames } from '@navigation/screenNames';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    __esModule: true,
    useNavigation: () => {
      return { navigate: mockedNavigate };
    },
  };
});

//  테스트 코드를 작성할 때는 이 컴포넌트의 핵심 기능과 행위를 중심으로 다음과 같은 사항들을 검증하는 것이 좋다.
describe('Link Component', () => {
  const expectedLink = ScreenNames.WITH_BOTTOM_TABS;
  const childrenText = 'TestComponentItem';
  const TestComponent = () => {
    return <Text>{childrenText}</Text>;
  };
  const TestComponentWithProps = ({ text }: { text: string }) => {
    return <Text>{text}</Text>;
  };

  test('Link 컴포넌트는 주어진 컴포넌트를 HOC로 감싸며, 렌더링 시 해당 컴포넌트를 정상적으로 표시해야 한다.', () => {
    const NewComponent = Link(TestComponent, expectedLink);
    render(<NewComponent />);
    expect(screen.getByText(childrenText)).toBeOnTheScreen();
  });

  test('사용자가 컴포넌트를 터치할 경우, Link 컴포넌트는 지정된 경로로의 네비게이션을 수행해야 한다.', async () => {
    const user = userEvent.setup();
    const NewComponent = Link(TestComponent, expectedLink);
    render(<NewComponent />);
    const TargetComponent = screen.getByText(childrenText);
    await user.press(TargetComponent);
    expect(mockedNavigate).toHaveBeenCalledWith(expectedLink, undefined);
  });

  test('네비게이션 수행 시, Link 컴포넌트에 전달된 추가 파라미터는 네비게이터 함수 호출에 포함되어야 한다.', async () => {
    const user = userEvent.setup();
    const childrenProps = 'new children Props';
    const newParm = {
      id: 'TEST_ID',
    };
    const NewComponent = Link(
      TestComponentWithProps,
      expectedLink,
      newParm as any, // 파라미터 전달
    );
    render(<NewComponent text={childrenProps} />);
    const TargetComponent = screen.getByText(childrenProps);
    await user.press(TargetComponent);
    expect(mockedNavigate).toHaveBeenCalledWith(expectedLink, newParm);
  });

  test('props가 전달되었을 때, 자식 컴포넌트는 전달받은 props를 사용하여 정상적으로 렌더링되어야 한다.', () => {
    const childrenProps = 'new children Props';
    const NewComponent = Link(TestComponentWithProps, expectedLink);
    render(<NewComponent text={childrenProps} />);
    const TargetComponent = screen.getByText(childrenProps);
    expect(TargetComponent).toBeOnTheScreen();
  });
});
