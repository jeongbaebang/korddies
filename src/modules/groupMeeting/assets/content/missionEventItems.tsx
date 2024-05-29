import React from 'react';

import BathingPeople from '../BathingPeople';
import KoreanManWoman from '../KoreanManWoman';
import type { MissionCardProps } from '@modules/groupMeeting/components/MissionEventList';

export enum MissionCardType {
  HOME = 'HOME',
  KYUNGBOK = 'KYUNGBOK',
  KOREA_SPA = 'KOREA_SPA',
}

export type MissionCardNames = Exclude<MissionCardType, MissionCardType.HOME>;

type CardItemMap = {
  [Key in MissionCardNames]: MissionCardProps;
};

type CardItemHeaderMap = {
  [Key in MissionCardType]: string;
};

const missionCardType01: MissionCardProps = {
  backgroundColor: '#FFEEEF',
  leftContent: {
    title: '경복궁 한복 나들이',
    description: 'kyungbok palace with han-bok',
    date: 'Challenge Week | 05/13 - 05/19',
  },
  RightContent: () => <KoreanManWoman />,
};

const missionCardType02: MissionCardProps = {
  backgroundColor: '#FFFDEC',
  leftContent: {
    title: '찜질방 체험',
    description: 'Enjoying Korea spa',
    date: 'Challenge Week | 05/20 - 05/26',
  },
  RightContent: () => <BathingPeople />,
};

const missionCardItemMap: CardItemMap = {
  [MissionCardType.KYUNGBOK]: missionCardType01,
  [MissionCardType.KOREA_SPA]: missionCardType02,
};

const missionCardHeaderTitleMap: CardItemHeaderMap = {
  [MissionCardType.HOME]: '먼저 코디즈 미션 이벤트를 참여해볼까요?',
  [MissionCardType.KYUNGBOK]: 'Have you ever worn Korean traditional clothes?',
  [MissionCardType.KOREA_SPA]: 'Have you been Korean Spa & Sauna?',
};

export { missionCardItemMap, missionCardHeaderTitleMap };
