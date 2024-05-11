import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { composeStories } from '@storybook/react';

import * as stories from './Button.stories';

const { Basic } = composeStories(stories);

describe('Button Component', () => {
  test('renders primary box with default args', () => {
    render(<Basic />);
    const BoxElement = screen.getByText(/Hello world/i);
    expect(BoxElement).toBeOnTheScreen();
  });
});
