import type { Meta, StoryObj } from '@storybook/react';

import MissionCard from './MissionCard';
import { type01, type02 } from '@modules/groupMeeting/mock/missionCardItems';

const StoryComponent: Meta<typeof MissionCard> = {
  title: 'modules/groupMeeting/cards/MissionCard',
  component: MissionCard,
};

export default StoryComponent;

export const CardType01: StoryObj<typeof MissionCard> = {
  args: type01,
};

export const CardType02: StoryObj<typeof MissionCard> = {
  args: type02,
};
