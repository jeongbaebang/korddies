import React from 'react';

import { MissionCardProps } from '../components/MissionEventList/MissionCard';
import KoreanManWoman from '../assets/KoreanManWoman';
import BathingPeople from '../assets/BathingPeople';

export const type01: MissionCardProps = {
  backgroundColor: '#FFEEEF',
  leftContent: {
    title: '경복궁 한복 나들이',
    description: 'kyungbok palace with han-bok',
    date: 'Challenge Week | 05/13 - 05/19',
  },
  RightContent: () => <KoreanManWoman />,
};

export const type02: MissionCardProps = {
  backgroundColor: '#FFFDEC',
  leftContent: {
    title: '찜질방 체험',
    description: 'Enjoying Korea spa',
    date: 'Challenge Week | 05/20 - 05/26',
  },
  RightContent: () => <BathingPeople />,
};
