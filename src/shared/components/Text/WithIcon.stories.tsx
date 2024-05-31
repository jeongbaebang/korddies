import type { Meta, StoryObj } from '@storybook/react';
import Component from './WithIcon';
import { sizeConverter } from '@shared/constants/designSystem';
import { IconType } from '../Icons';

const StoryComponent: Meta<typeof Component> = {
  title: 'shared/components/Text/WithIcon',
  component: Component,
};

export default StoryComponent;

const scale = 2;

export const Basic: StoryObj<typeof Component> = {
  args: {
    style: {
      gap: sizeConverter(10),
      font: {
        fontSize: sizeConverter(15 * scale),
        color: '#4F5E7B',
      },
      icon: {
        color: '#1B1A57',
        size: sizeConverter(16 * scale),
      },
    },
    contentText: '오후 07:00',
    iconType: IconType.Clock,
  },
};
