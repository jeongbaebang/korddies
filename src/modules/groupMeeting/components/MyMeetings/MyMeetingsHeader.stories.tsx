import type { Meta, StoryObj } from '@storybook/react';

import Component from './MyMeetingsHeader';

const meta: Meta<typeof Component> = {
  title: 'modules/groupMeeting/myMeeting/MyMeetingsHeader',
  component: Component,
};

export default meta;

export const Basic: StoryObj<typeof Component> = {
  args: {
    leftText: '나의 모임',
    rightText: '모두 보기',
  },
};
