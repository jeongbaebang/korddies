import React from 'react';

import {
  BackActionButton,
  ScreenHeader,
} from '@modules/groupMeeting/components/Header';
import { SearchModalButton } from '@modules/groupMeeting/components/Search';
import { ActionIconButton } from '@shared/components/Buttons';
import { IconType } from '@shared/components/Icons';
import { sizeConverter } from '@shared/constants/designSystem';

type Props = {
  title: string;
  canGoBack: boolean;
  onBackPress: () => void;
};

const HeaderBlock: React.FC<Props> = ({ title, canGoBack, onBackPress }) => {
  const options = {
    size: sizeConverter(20),
    color: '#1B1A57',
  };

  const LeftComponent = canGoBack ? (
    <BackActionButton onPress={onBackPress} />
  ) : null;
  const RightComponent = (
    <>
      <SearchModalButton />
      <ActionIconButton type={IconType.CirclePlus} {...options} />
    </>
  );

  return (
    <ScreenHeader
      title={title}
      LeftAction={LeftComponent}
      RightAction={RightComponent}
    />
  );
};

export default HeaderBlock;
export { type Props as HeaderBlockProps };
