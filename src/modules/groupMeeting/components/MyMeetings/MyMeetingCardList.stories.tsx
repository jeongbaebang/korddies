import type { Meta, StoryObj } from '@storybook/react';

import Component from './MyMeetingCardList';
import {
  myMeetingCardType01,
  myMeetingCardType02,
  myMeetingCardType03,
  myMeetingCardType04,
  myMeetingCardType05,
} from '@modules/groupMeeting/mock/myMeetingCardItems';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/myMeeting/MyMeetingCardList',
  component: Component,
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {
  args: {
    data: [
      myMeetingCardType01,
      myMeetingCardType02,
      myMeetingCardType03,
      myMeetingCardType04,
      myMeetingCardType05,
    ],
  },
};
