import type { Meta, StoryObj } from '@storybook/react';

import Component from './DetailHeader';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/detail/DetailHeader',
  component: Component,
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {
  args: {
    uri: 'https://images.unsplash.com/photo-1521572115275-e3becac251db?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
};
