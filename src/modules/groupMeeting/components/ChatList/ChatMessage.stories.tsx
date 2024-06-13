import type { Meta, StoryObj } from '@storybook/react';

import Component from './ChatMessage';

const meta = {
  title: 'modules/groupMeeting/chat/ChatItem',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: {
      image: '',
      message: 'Hello',
      name: 'gomango',
      people: 2,
      time: '14:20',
    },
  },
};
