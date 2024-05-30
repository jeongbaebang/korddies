import type { Meta, StoryObj } from '@storybook/react';

import { MeetingListSectionBlock as Component } from './MeetingListSectionBlock';

const StoryComponent: Meta<typeof Component> = {
  title: 'modules/groupMeeting/screen/MeetingListSectionBlock',
  component: Component,
};

export default StoryComponent;

export const Basic: StoryObj<typeof Component> = {};
