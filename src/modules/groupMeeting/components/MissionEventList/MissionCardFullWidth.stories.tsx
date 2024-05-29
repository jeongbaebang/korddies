import type { Meta, StoryObj } from '@storybook/react';

import { MissionCardFullWidth } from './MissionCard';
import {
  MissionCardType,
  missionCardItemMap,
} from '@modules/groupMeeting/assets/content/missionEventItems';

const StoryComponent: Meta<typeof MissionCardFullWidth> = {
  title: 'modules/groupMeeting/missionEvent/MissionCard',
  component: MissionCardFullWidth,
};

export default StoryComponent;

export const CardType03: StoryObj<typeof MissionCardFullWidth> = {
  args: missionCardItemMap[MissionCardType.KYUNGBOK],
};

export const CardType04: StoryObj<typeof MissionCardFullWidth> = {
  args: missionCardItemMap[MissionCardType.KOREA_SPA],
};
