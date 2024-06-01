import type { Meta, StoryObj } from '@storybook/react';

import { MeetingListSectionBlock as Component } from './MeetingListSectionBlock';
import { mockMeetingCard } from '@modules/groupMeeting/mock/meetingCardItems';
import { MeetingCard } from '@modules/groupMeeting/components/MeetingList';

const meta: Meta<typeof Component> = {
  title: 'modules/groupMeeting/screen/MeetingListSectionBlock',
  component: Component,
};

export default meta;

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
    RenderItem: (item) => <MeetingCard {...item} />,
  },
};
