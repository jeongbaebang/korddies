import type { Meta, StoryObj } from '@storybook/react';

import Component from './MyMeetingCard';
import { myMeetingCardType01 } from '@modules/groupMeeting/mock/myMeetingCardItems';

const meta: Meta<typeof Component> = {
  title: 'modules/groupMeeting/myMeeting/MyMeetingCard',
  component: Component,
};

export default meta;

export const Basic: StoryObj<typeof Component> = {
  args: myMeetingCardType01,
};
