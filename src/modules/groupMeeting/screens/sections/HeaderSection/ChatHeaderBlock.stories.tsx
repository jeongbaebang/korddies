import type { Meta, StoryObj } from '@storybook/react';

import Component from './ChatHeaderBlock';

const meta = {
  title: 'modules/groupMeeting/screen/header/ChatHeaderBlock',
  parameters: {
    noSafeArea: true,
  },
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: '이수 보드게임',
    count: 5,
  },
};
