import type { Meta, StoryObj } from '@storybook/react';

import Component from './HeaderBlock';

const meta = {
  title: 'modules/groupMeeting/screen/header/GroupMeetingHeaderBlock',
  parameters: {
    noSafeArea: true,
  },
  component: Component,
  args: {
    canGoBack: false,
    title: 'Let’s hang out with Korddies',
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
export const CanGoBack: Story = {
  args: {
    canGoBack: true,
  },
};
