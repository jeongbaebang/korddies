import React from 'react';

import {
  type ActionButtonProps,
  ActionIconButton,
} from '@shared/components/Buttons';
import { IconType } from '@shared/components/Icons';
import { sizeConverter } from '@shared/constants/designSystem';

type Props = {
  onPress: () => void;
  type?: IconType;
};

const BackActionButton: React.FC<Props> = ({
  onPress,
  type = IconType.ChevronLeft,
}) => {
  const options: ActionButtonProps = {
    size: sizeConverter(20),
    color: '#1B1A57',
    type: type,
  };

  return <ActionIconButton onPress={onPress} {...options} />;
};

export default BackActionButton;
