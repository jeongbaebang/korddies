import type { Meta, StoryObj } from '@storybook/react';

import Component from './MyMeetingsSectionBlock';
import {
  myMeetingCardType01,
  myMeetingCardType02,
  myMeetingCardType03,
  myMeetingCardType04,
  myMeetingCardType05,
} from '@modules/groupMeeting/mock/myMeetingCardItems';

const meta: Meta<typeof Component> = {
  title: 'modules/groupMeeting/screen/MyMeetingsSection',
  component: Component,
};

export default meta;

export const Basic: StoryObj<typeof Component> = {
  args: {
    headerTitle: {
      left: '나의 모임',
      right: '모두 보기',
    },
    payload: [
      myMeetingCardType01,
      myMeetingCardType02,
      myMeetingCardType03,
      myMeetingCardType04,
      myMeetingCardType05,
    ],
  },
};
