import type { Meta, StoryObj } from '@storybook/react';

import Component from './DetailHeaderBlock';
import { cardImage01 } from '@modules/groupMeeting/mock/myMeetingCardItems';

const meta = {
  title: 'modules/groupMeeting/screen/DetailHeaderBlock',
  parameters: {
    noSafeArea: true,
  },
  component: Component,
  args: {
    imageURI: cardImage01,
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
