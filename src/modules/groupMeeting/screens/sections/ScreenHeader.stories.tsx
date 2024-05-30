import type { Meta, StoryObj } from '@storybook/react';

import Component, { GroupMeetingDetailScreenHeader } from './ScreenHeader';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/screen/Header',
  component: Component,
  parameters: {
    noSafeArea: true,
  },
  argTypes: {
    onBackPress: { action: 'pressed the backPress button' },
  },
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {};

export const DetailScreenHeader: StoryObj<typeof Component> = {
  decorators: [
    () => {
      return <GroupMeetingDetailScreenHeader />;
    },
  ],
};
