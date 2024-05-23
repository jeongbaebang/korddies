import type { Meta, StoryObj } from '@storybook/react';

import EventJoinCardList from './EventJoinCardList';
import { mockEventJoinCard } from '@modules/groupMeeting/mock/eventJoinCardItems';

const StoryComponent: Meta<typeof EventJoinCardList> = {
  title: 'modules/groupMeeting/cards/EventJoinCardList',
  component: EventJoinCardList,
};

export default StoryComponent;

export const Basic: StoryObj<typeof EventJoinCardList> = {
  args: {
    data: [
      mockEventJoinCard,
      mockEventJoinCard,
      mockEventJoinCard,
      mockEventJoinCard,
      mockEventJoinCard,
      mockEventJoinCard,
      mockEventJoinCard,
    ],
  },
};
