import type { Meta, StoryObj } from '@storybook/react';

import { MissionCardFullWidth } from './MissionCard';
import {
  MissionCardType,
  missionCardItemMap,
} from '@modules/groupMeeting/assets/content/missionEventItems';

const meta: Meta<typeof MissionCardFullWidth> = {
  title: 'modules/groupMeeting/missionEvent/MissionCard',
  component: MissionCardFullWidth,
};

export default meta;

export const CardType03: StoryObj<typeof MissionCardFullWidth> = {
  args: missionCardItemMap[MissionCardType.KYUNGBOK],
};

export const CardType04: StoryObj<typeof MissionCardFullWidth> = {
  args: missionCardItemMap[MissionCardType.KOREA_SPA],
};
