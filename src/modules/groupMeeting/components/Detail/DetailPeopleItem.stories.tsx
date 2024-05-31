import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import Component from './DetailPeopleItem';
import { sizeConverter } from '@shared/constants/designSystem';
import { detailPeopleItem01 } from '@modules/groupMeeting/mock/detailPeopleItem';

const meta = {
  title: 'modules/groupMeeting/detail/DetailPeopleItem',
  component: Component,
  decorators: [
    (Story) => {
      return (
        <View style={{ margin: sizeConverter(15) }}>
          <Story />
        </View>
      );
    },
  ],
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: detailPeopleItem01,
};
