import React from 'react';

import ScreenHeaderLayout from './ScreenHeaderLayout';
import HeaderTitle from './HeaderTitle';
import LeftActionArea from './LeftActionArea';
import RightActionArea from './RightActionArea';

type Props = {
  title: string;
  LeftAction: React.JSX.Element | null;
  RightAction: React.JSX.Element;
};

const ScreenHeader: React.FC<Props> = ({ title, LeftAction, RightAction }) => {
  return (
    <ScreenHeaderLayout>
      {LeftAction ? <LeftActionArea>{LeftAction}</LeftActionArea> : null}
      <HeaderTitle title={title} />
      <RightActionArea>{RightAction}</RightActionArea>
    </ScreenHeaderLayout>
  );
};

export default ScreenHeader;
