import React from 'react';

import ScreenHeaderLayout from './ScreenHeaderLayout';
import HeaderTitle from './HeaderTitle';
import LeftActionArea from './LeftActionArea';
import RightActionArea from './RightActionArea';
import { TextStyle } from 'react-native';

type Props = {
  title: string;
  LeftAction: React.JSX.Element | null;
  RightAction: React.JSX.Element;
  titleStyle?: TextStyle;
  count?: number;
};

const ScreenHeader: React.FC<Props> = ({
  title,
  titleStyle,
  count,
  LeftAction,
  RightAction,
}) => {
  return (
    <ScreenHeaderLayout>
      {LeftAction ? <LeftActionArea>{LeftAction}</LeftActionArea> : null}
      <HeaderTitle title={title} style={titleStyle} count={count} />
      <RightActionArea>{RightAction}</RightActionArea>
    </ScreenHeaderLayout>
  );
};

export default ScreenHeader;
