import { ScrollView } from 'react-native';
import React from 'react';

import MeetingCard, { MeetingCardProps } from './MeetingCard';

type Props = {
  data: MeetingCardProps[];
};

const MeetingCardList: React.FC<Props> = (props) => {
  return (
    <ScrollView>
      {props.data.map((item, index) => {
        return (
          <MeetingCard
            key={index}
            leftContent={item.leftContent}
            rightContent={item.rightContent}
          />
        );
      })}
    </ScrollView>
  );
};

export default MeetingCardList;
