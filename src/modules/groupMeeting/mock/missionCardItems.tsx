import React from 'react';

import { MissionCardProps } from '../components/cards/MissionCard';
import BathingPeople from '../assets/BathingPeople';
import {
  KoreanManWoman,
  KoreanManWomanFullWidth,
} from '../assets/KoreanManWoman';

export const type01: MissionCardProps = {
  backgroundColor: '#FFF4F4',
  leftContent: {
    title: {
      font: {
        color: '#1B1A57',
      },
      text: '경복궁 한복 나들이',
    },
    description: {
      font: {
        color: '#4F5E7B',
      },
      text: 'kyungbok palace with han-bok',
    },
    date: {
      font: {
        color: '#4F5E7B',
      },
      text: 'Challenge Week | 05/13 ~ 05/19',
      backgroundColor: '#FFFFFF',
    },
  },
  RightContent: () => <KoreanManWoman />,
};

export const type02: MissionCardProps = {
  backgroundColor: '#FFFDEC',
  leftContent: {
    title: {
      font: {
        color: '#1B1A57',
      },
      text: '찜질방 체험',
    },
    description: {
      font: {
        color: '#4F5E7B',
      },
      text: 'Enjoying Korea spa',
    },
    date: {
      font: {
        color: '#4F5E7B',
      },
      text: 'Challenge Week | 05/20 ~ 05/26',
      backgroundColor: '#FFFFFF',
    },
  },
  RightContent: () => <BathingPeople />,
};

export const type03: MissionCardProps = {
  fullWidth: true,
  backgroundColor: '#FFF4F4',
  leftContent: {
    title: {
      font: {
        color: '#1B1A57',
      },
      text: '경복궁 한복 나들이',
    },
    description: {
      font: {
        color: '#4F5E7B',
      },
      text: 'kyungbok palace with han-bok',
    },
    date: {
      font: {
        color: '#4F5E7B',
      },
      text: 'Challenge Week | 05/13 ~ 05/19',
      backgroundColor: '#FFFFFF',
    },
  },
  RightContent: () => <KoreanManWomanFullWidth />,
};

export const type04: MissionCardProps = {
  fullWidth: true,
  backgroundColor: '#FFFDEC',
  leftContent: {
    title: {
      font: {
        color: '#1B1A57',
      },
      text: '찜질방 체험',
    },
    description: {
      font: {
        color: '#4F5E7B',
      },
      text: 'Enjoying Korea spa',
    },
    date: {
      font: {
        color: '#4F5E7B',
      },
      text: 'Challenge Week | 05/20 ~ 05/26',
      backgroundColor: '#FFFFFF',
    },
  },
  RightContent: () => <BathingPeople fullWidth />,
};
