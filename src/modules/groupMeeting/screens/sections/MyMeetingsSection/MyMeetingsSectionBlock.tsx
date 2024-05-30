import { View } from 'react-native';
import React from 'react';

import {
  MyMeetingsHeader,
  MyMeetingCardList,
  MyMeetingCardProps,
} from '@modules/groupMeeting/components/MyMeetings';

type Props = {
  headerTitle: {
    left: string;
    right: string;
  };
  payload: MyMeetingCardProps[];
};

const MyMeetingsSectionBlock: React.FC<Props> = ({ headerTitle, payload }) => {
  return (
    <View>
      <MyMeetingsHeader
        leftText={headerTitle.left}
        rightText={headerTitle.right}
      />
      <MyMeetingCardList data={payload} />
    </View>
  );
};

export { MyMeetingsSectionBlock };
