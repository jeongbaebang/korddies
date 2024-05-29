import type { Meta, StoryObj } from '@storybook/react';

import Component from './EventSectionBlock';
import { MissionCard } from '@modules/groupMeeting/components/MissionEventList';
import {
  MissionCardType,
  missionCardHeaderTitleMap,
} from '@modules/groupMeeting/assets/content/missionEventItems';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/screen/EventSectionBlock',
  component: Component,
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {
  args: {
    headerTitle: missionCardHeaderTitleMap[MissionCardType.HOME],
    cardKeys: [MissionCardType.KYUNGBOK, MissionCardType.KOREA_SPA],
    RenderItem: (props) => <MissionCard {...props} />,
  },
};
