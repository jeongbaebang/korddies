import type { Meta, StoryObj } from '@storybook/react';

import Component from './SearchModal';

const meta = {
  title: 'modules/groupMeeting/search/SearchModal',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
