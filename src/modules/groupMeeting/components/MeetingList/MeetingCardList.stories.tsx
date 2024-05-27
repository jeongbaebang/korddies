import type { Meta, StoryObj } from '@storybook/react';

import MeetingCardList from './MeetingCardList';
import { mockMeetingCard } from '@modules/groupMeeting/mock/meetingCardItems';

const StoryComponent: Meta<typeof MeetingCardList> = {
  title: 'modules/groupMeeting/meeting/MeetingCardList',
  component: MeetingCardList,
};

export default StoryComponent;

export const Basic: StoryObj<typeof MeetingCardList> = {
  args: {
    data: [
      mockMeetingCard,
      mockMeetingCard,
      mockMeetingCard,
      mockMeetingCard,
      mockMeetingCard,
      mockMeetingCard,
      mockMeetingCard,
    ],
  },
};
