import type { Meta, StoryObj } from '@storybook/react';

import MissionCard from './MissionCard';
import { type01, type02 } from '@modules/groupMeeting/mock/missionCardItems';
import { View } from 'react-native';
import { sizeConverter } from '@shared/constants/designSystem';

const StoryComponent: Meta<typeof MissionCard> = {
  title: 'modules/groupMeeting/cards/MissionCard',
  component: MissionCard,
  decorators: [
    (Story) => {
      return (
        <View style={{ height: sizeConverter(102) }}>
          <Story />
        </View>
      );
    },
  ],
};

export default StoryComponent;

export const CardType01: StoryObj<typeof MissionCard> = {
  args: type01,
};

export const CardType02: StoryObj<typeof MissionCard> = {
  args: type02,
};
