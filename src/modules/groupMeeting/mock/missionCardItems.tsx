import React from 'react';
import { View, ViewStyle } from 'react-native';

import { converteToResponsiveStyle } from '@shared/constants/designSystem';
import ManWomanSVG from '../assets/KoreanManWomanSVG';
import SpaSVG from '../assets/SpaSVG';

export const type01 = {
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
          alignSelf: 'center',
        })}>
        <ManWomanSVG />
      </View>
    );
  },
};

export const type02 = {
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
};
