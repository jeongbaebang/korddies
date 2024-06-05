import { View, Appearance } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [withBackgrounds],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: Appearance.getColorScheme() === 'dark' ? 'dark' : 'light',
      values: [
        { name: 'dark', value: '#2A2C38' },
        { name: 'light', value: '#F6F6F6' },
      ],
    },
  },
};

export default preview;
