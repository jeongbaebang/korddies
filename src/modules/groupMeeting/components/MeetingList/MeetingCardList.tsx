import { View } from 'react-native';
import React from 'react';

import MeetingCard, { MeetingCardProps } from './MeetingCard';

type Props = {
  data: MeetingCardProps[];
};

const MeetingCardList: React.FC<Props> = (props) => {
  const { container } = {
    container: {
      backgroundColor: '#ffffff',
    },
  };

  return (
    <View style={container}>
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
