import { View } from 'react-native';
import React, { ComponentType } from 'react';

import { MeetingCardProps } from './MeetingCard';

type Props = {
  data: MeetingCardProps[];
  CardItem: ComponentType<MeetingCardProps>;
};

const MeetingCardList: React.FC<Props> = ({ CardItem, data }) => {
  const { color } = {
    color: {
      backgroundColor: '#ffffff',
    },
  };

  return (
    <View style={color}>
      {data.map((item, index) => {
        return <CardItem key={index} {...item} />;
      })}
    </View>
  );
};

export default MeetingCardList;
