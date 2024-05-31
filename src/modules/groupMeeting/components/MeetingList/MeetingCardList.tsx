import { View } from 'react-native';
import React from 'react';

import MeetingCard, { MeetingCardProps } from './MeetingCard';

type Props = {
  data: MeetingCardProps[];
};

const MeetingCardList: React.FC<Props> = (props) => {
  const { color } = {
    color: {
      backgroundColor: '#ffffff',
    },
  };

  return (
    <View style={color}>
      {props.data.map((item, index) => {
        return (
          <MeetingCard
            key={index}
            leftContent={item.leftContent}
            rightContent={item.rightContent}
          />
        );
      })}
    </View>
  );
};

export default MeetingCardList;
