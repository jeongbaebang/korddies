import { View } from 'react-native';
import React from 'react';

import {
  DetailInfoCard,
  DetailInfoCardProps,
} from '@modules/groupMeeting/components/Detail';

type Props = {
  payload: DetailInfoCardProps;
};

const DetailSectionBlock: React.FC<Props> = ({ payload }) => {
  return (
    <View>
      <DetailInfoCard {...payload} />
    </View>
  );
};

export default DetailSectionBlock;
