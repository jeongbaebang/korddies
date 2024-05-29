import type { Meta, StoryObj } from '@storybook/react';

import MissionCardList from './MissionCardList';
import MissionCard from './MissionCard';
import { MissionCardType } from '@modules/groupMeeting/assets/content/missionEventItems';

const StoryComponent: Meta<typeof MissionCardList> = {
  title: 'modules/groupMeeting/missionEvent/MissionCardList',
  component: MissionCardList,
};

export default StoryComponent;

export const Basic: StoryObj<typeof MissionCardList> = {
  args: {
    data: [MissionCardType.KYUNGBOK, MissionCardType.KOREA_SPA],
    ItemComponent: MissionCard,
  },
};
