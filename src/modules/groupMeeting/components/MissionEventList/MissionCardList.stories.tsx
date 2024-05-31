import type { Meta, StoryObj } from '@storybook/react';

import MissionCardList from './MissionCardList';
import MissionCard from './MissionCard';
import { MissionCardType } from '@modules/groupMeeting/assets/content/missionEventItems';

const meta: Meta<typeof MissionCardList> = {
  title: 'modules/groupMeeting/missionEvent/MissionCardList',
  component: MissionCardList,
};

export default meta;

export const Basic: StoryObj<typeof MissionCardList> = {
  args: {
    data: [MissionCardType.KYUNGBOK, MissionCardType.KOREA_SPA],
    CardItem: MissionCard,
  },
};
