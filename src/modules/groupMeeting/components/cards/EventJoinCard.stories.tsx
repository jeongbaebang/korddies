import type { Meta, StoryObj } from '@storybook/react';

import EventJoinCard from './EventJoinCard';
import { mockEventJoinCard } from '@modules/groupMeeting/mock/eventJoinCardItems';

const StoryComponent: Meta<typeof EventJoinCard> = {
  title: 'modules/groupMeeting/cards/EventJoinCard',
  component: EventJoinCard,
};

export default StoryComponent;

export const Basic: StoryObj<typeof EventJoinCard> = {
  args: mockEventJoinCard,
};
