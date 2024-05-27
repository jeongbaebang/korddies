import type { Meta, StoryObj } from '@storybook/react';

import Component from './EventListSection';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/screen/EventListSection',
  component: Component,
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {};
