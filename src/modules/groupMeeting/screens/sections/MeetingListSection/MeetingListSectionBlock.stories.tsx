import type { Meta, StoryObj } from '@storybook/react';

import { MeetingListSectionBlock as Component } from './MeetingListSectionBlock';
import { mockMeetingCard } from '@modules/groupMeeting/mock/meetingCardItems';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/screen/MeetingListSectionBlock',
  component: Component,
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {
  args: {
    payload: [
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
