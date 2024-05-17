import type { Meta, StoryObj } from '@storybook/react';

import ScreenHeader from './ScreenHeader';

const MyButtonMeta: Meta<typeof ScreenHeader> = {
  title: 'modules/groupMeeting/ScreenHeader',
  component: ScreenHeader,
  parameters: {
    noSafeArea: true,
  },
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof ScreenHeader> = {};
