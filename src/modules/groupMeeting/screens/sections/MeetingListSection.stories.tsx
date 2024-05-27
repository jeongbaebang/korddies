import type { Meta, StoryObj } from '@storybook/react';

import Component from './MeetingListSection';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/screen/MeetingListSection',
  component: Component,
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {};
