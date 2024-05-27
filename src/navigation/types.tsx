import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScreenNames } from './screenNames';

// RootStackParamList 정의
export type RootStackParamList = {
  [ScreenNames.WITH_BOTTOM_TABS]: NavigatorScreenParams<BottomTabParamList>;
};

// RootStackScreenProps 정의
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

// GroupMeetingStackParamList 정의
export type GroupMeetingStackParamList = {
  [ScreenNames.GROUP_MEETING]: undefined;
  [ScreenNames.GROUP_MEETING_DETAIL]: undefined;
};

// BottomTabParamList 정의
export type BottomTabParamList = {
  [ScreenNames.GROUP_MEETING_STACK]: NavigatorScreenParams<GroupMeetingStackParamList>;
  [ScreenNames.MOMENTS]: undefined;
  [ScreenNames.CHAT]: undefined;
  [ScreenNames.MY_PROFILE]: undefined;
};

// HomeTabScreenProps 정의
export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

// GroupMeetingStackScreenProps 정의
export type GroupMeetingStackScreenProps<
  T extends keyof GroupMeetingStackParamList,
> = CompositeScreenProps<
  NativeStackScreenProps<GroupMeetingStackParamList, T>,
  HomeTabScreenProps<keyof BottomTabParamList>
>;

// 모든 네비게이션 파라미터를 포함하는 유틸리티 타입 정의
export type AllParamList = RootStackParamList &
  BottomTabParamList &
  GroupMeetingStackParamList;

// 글로벌 네비게이션 타입 확장
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
