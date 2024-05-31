import { View } from 'react-native';
import React from 'react';

import {
  DetailInfoCard,
  DetailInfoCardProps,
  DetailPeopleList,
  DetailPeopleItemProps,
} from '@modules/groupMeeting/components/Detail';

type Props = {
  payload: {
    info: DetailInfoCardProps;
    peoples: DetailPeopleItemProps[];
  };
};

const DetailSectionBlock: React.FC<Props> = ({
  payload: { info, peoples },
}) => {
  return (
    <View>
      <DetailInfoCard {...info} />
      <DetailPeopleList data={peoples} />
    </View>
  );
};

export default DetailSectionBlock;
