import type { Meta, StoryObj } from '@storybook/react';

import { MissionCardFullWidth } from './MissionCard';
import { type01, type02 } from '@modules/groupMeeting/mock/missionCardItems';

const StoryComponent: Meta<typeof MissionCardFullWidth> = {
  title: 'modules/groupMeeting/cards/MissionCard',
  component: MissionCardFullWidth,
};

export default StoryComponent;

export const CardType03: StoryObj<typeof MissionCardFullWidth> = {
  args: type01,
};

export const CardType04: StoryObj<typeof MissionCardFullWidth> = {
  args: type02,
};
