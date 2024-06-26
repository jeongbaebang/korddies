import type { Meta, StoryObj } from '@storybook/react';

import MissionCard from './MissionCard';
import {
  MissionCardType,
  missionCardItemMap,
} from '@modules/groupMeeting/assets/content/missionEventItems';

const meta: Meta<typeof MissionCard> = {
  title: 'modules/groupMeeting/missionEvent/MissionCard',
  component: MissionCard,
};

export default meta;

export const CardType01: StoryObj<typeof MissionCard> = {
  args: missionCardItemMap[MissionCardType.KYUNGBOK],
};

export const CardType02: StoryObj<typeof MissionCard> = {
  args: missionCardItemMap[MissionCardType.KOREA_SPA],
};
