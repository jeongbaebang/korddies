import type { Meta, StoryObj } from '@storybook/react';

import Component from './DetailSectionBlock';
import { detailPeopleItems } from '@modules/groupMeeting/mock/detailPeopleItem';

const meta = {
  title: 'modules/groupMeeting/screen/DetailSectionBlock',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    payload: {
      info: {
        title: '이수 보드게임',
        time: '오후 07:00',
        users: '5/6명',
        address: 'Board game Cafe Holmes & Lupin Isu stat..',
        description: 'Let’s play boardgame nearby Isu station!',
        onPress: () => {},
      },
      peoples: detailPeopleItems,
    },
  },
};
