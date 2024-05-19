import type { Meta, StoryObj } from '@storybook/react';

import MissionCardList from './MissionCardList';
import { type01, type02 } from '@modules/groupMeeting/mock/missionCardItems';

const StoryComponent: Meta<typeof MissionCardList> = {
  title: 'modules/groupMeeting/cards/MissionCardList',
  component: MissionCardList,
};

export default StoryComponent;

export const Basic: StoryObj<typeof MissionCardList> = {
  args: {
    data: [type01, type02],
  },
};
