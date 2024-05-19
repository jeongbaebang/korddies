import { View, ViewStyle } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';

import MissionCard from './MissionCard';
import ManWomanSVG from '@modules/groupMeeting/assets/KoreanManWomanSVG';
import SpaSVG from '@modules/groupMeeting/assets/SpaSVG';
import { converteToResponsiveStyle } from '@shared/constants/designSystem';

const StoryComponent: Meta<typeof MissionCard> = {
  title: 'modules/groupMeeting/cards/MissionCard',
  component: MissionCard,
};

export default StoryComponent;

export const CardType01: StoryObj<typeof MissionCard> = {
  args: {
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
    RightContent: () => {
      return (
        <View
          style={converteToResponsiveStyle<ViewStyle>({
            flexDirection: 'row',
            gap: 4,
            height: 77,
            width: 61,
          })}>
          <ManWomanSVG />
        </View>
      );
    },
  },
};

export const CardType02: StoryObj<typeof MissionCard> = {
  args: {
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
    RightContent: () => {
      return (
        <View
          style={converteToResponsiveStyle<ViewStyle>({
            width: 84,
            height: 59,
            alignSelf: 'center',
          })}>
          <SpaSVG />
        </View>
      );
    },
  },
};
