import { View } from 'react-native';
import React from 'react';

import {
  MeetingCardList,
  MeetingCardProps,
} from '@modules/groupMeeting/components/MeetingList';

type Props = {
  payload: MeetingCardProps[];
};

const MeetingListSectionBlock: React.FC<Props> = (props) => {
  return (
    <View>
      <MeetingCardList data={props.payload} />
    </View>
  );
};

export { MeetingListSectionBlock };
