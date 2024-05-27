import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconType } from './Icons';

const StoryComponent: Meta<typeof Icon> = {
  title: 'shared/components/Icons',
  component: Icon,
  args: {
    size: 24,
  },
};

export default StoryComponent;

export const CirclePlus: StoryObj<typeof Icon> = {
  args: {
    type: IconType.CirclePlus,
  },
};

export const Clock: StoryObj<typeof Icon> = {
  args: {
    type: IconType.Clock,
  },
};

export const House: StoryObj<typeof Icon> = {
  args: {
    type: IconType.House,
  },
};

export const Plus: StoryObj<typeof Icon> = {
  args: {
    type: IconType.Plus,
  },
};

export const Search: StoryObj<typeof Icon> = {
  args: {
    type: IconType.Search,
  },
};

export const UserGroup: StoryObj<typeof Icon> = {
  args: {
    type: IconType.UserGroup,
  },
};

export const PaperPlane: StoryObj<typeof Icon> = {
  args: {
    type: IconType.PaperPlane,
  },
};

export const CommentDots: StoryObj<typeof Icon> = {
  args: {
    type: IconType.CommentDots,
  },
};

export const CircleUser: StoryObj<typeof Icon> = {
  args: {
    type: IconType.CircleUser,
  },
};
