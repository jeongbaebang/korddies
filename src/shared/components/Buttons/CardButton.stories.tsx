import type { Meta, StoryObj } from '@storybook/react';
import Component from './CardButton';

const meta: Meta<typeof Component> = {
  title: 'shared/components/buttons/CardButton',
  component: Component,

  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: '채팅 참여하기',
    style: {
      font: {
        color: '#2F80ED',
        fontSize: 15,
      },
      container: {
        backgroundColor: '#EAF3FF',
      },
    },
  },
};

export default meta;

export const Basic: StoryObj<typeof Component> = {};
