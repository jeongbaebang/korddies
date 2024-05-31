import type { Meta, StoryObj } from '@storybook/react';

import Component from './DetailInfoCard';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/detail/DetailInfoCard',
  component: Component,
  args: {
    title: '이수 보드게임',
    time: '오후 07:00',
    users: '5/6명',
    address: 'Board game Cafe Holmes & Lupin Isu stat..',
    description: 'Let’s play boardgame nearby Isu station!',
    onPress: () => {},
  },
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {};
