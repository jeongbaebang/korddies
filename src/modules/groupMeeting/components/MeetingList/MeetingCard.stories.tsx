import type { Meta, StoryObj } from '@storybook/react';

import { mockMeetingCard } from '@modules/groupMeeting/mock/meetingCardItems';
import MeetingCard from './MeetingCard';

const meta: Meta<typeof MeetingCard> = {
  title: 'modules/groupMeeting/meeting/MeetingCard',
  component: MeetingCard,
};

export default meta;

export const Basic: StoryObj<typeof MeetingCard> = {
  args: mockMeetingCard,
};
