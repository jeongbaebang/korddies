import { ScrollView } from 'react-native';
import React from 'react';

import EventJoinCard, { EventJoinCardProps } from './EventJoinCard';

type Props = {
  data: EventJoinCardProps[];
};

const EventJoinCardList: React.FC<Props> = (props) => {
  return (
    <ScrollView>
      {props.data.map((item, index) => {
        return (
          <EventJoinCard
            key={index}
            leftContent={item.leftContent}
            rightContent={item.rightContent}
          />
        );
      })}
    </ScrollView>
  );
};

export default EventJoinCardList;
