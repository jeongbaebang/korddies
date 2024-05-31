import type { Meta, StoryObj } from '@storybook/react';

import Component from './MissionEventHeader';

const meta: Meta<typeof Component> = {
  title: 'modules/groupMeeting/missionEvent/MissionEventHeader',
  component: Component,
};

export default meta;

export const Basic: StoryObj<typeof Component> = {
  args: { text: '먼저 코디즈 미션 이벤트를 참여해볼까요?' },
};
