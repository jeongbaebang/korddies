import type { Meta, StoryObj } from '@storybook/react';

import Component from './DetailPeopleList';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/detail/DetailPeopleList',
  component: Component,
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {
  args: {
    users: '5 People',
  },
};
