import type { Meta, StoryObj } from '@storybook/react';

import Component from './DetailPeopleList';
import { detailPeopleItems } from '@modules/groupMeeting/mock/detailPeopleItem';

const meta = {
  title: 'modules/groupMeeting/detail/DetailPeopleList',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: detailPeopleItems,
  },
};
