import type { Meta, StoryObj } from '@storybook/react';

import Component from './MyMeetingsSection';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/screen/MyMeetingsSection',
  component: Component,
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {};
