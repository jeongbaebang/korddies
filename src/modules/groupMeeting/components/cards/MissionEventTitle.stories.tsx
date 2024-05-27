import type { Meta, StoryObj } from '@storybook/react';

import Component from './MissionEventTitle';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/cards/MissionEventTitle',
  component: Component,
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {
  args: { text: '먼저 코디즈 미션 이벤트를 참여해볼까요?' },
};
