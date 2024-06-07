import React from 'react';

import ScreenHeaderLayout from './ScreenHeaderLayout';
import HeaderTitle, { HeaderTitleProps } from './HeaderTitle';
import LeftActionArea from './LeftActionArea';
import RightActionArea from './RightActionArea';

type Props = {
  LeftAction: React.JSX.Element | null;
  RightAction: React.JSX.Element;
  titleOptions: HeaderTitleProps;
};

const ScreenHeader: React.FC<Props> = ({
  titleOptions,
  LeftAction,
  RightAction,
}) => {
  return (
    <ScreenHeaderLayout>
      {LeftAction ? <LeftActionArea>{LeftAction}</LeftActionArea> : null}
      <HeaderTitle {...titleOptions} />
      <RightActionArea>{RightAction}</RightActionArea>
    </ScreenHeaderLayout>
  );
};

export default ScreenHeader;
