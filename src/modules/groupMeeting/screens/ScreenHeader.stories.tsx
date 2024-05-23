import type { Meta, StoryObj } from '@storybook/react';

import ScreenHeader from './ScreenHeader';

const StoryComponent: Meta<typeof ScreenHeader> = {
  title: 'modules/groupMeeting/screen/Header',
  component: ScreenHeader,
  parameters: {
    noSafeArea: true,
  },
};

export default StoryComponent;

export const Basic: StoryObj<typeof ScreenHeader> = {};
