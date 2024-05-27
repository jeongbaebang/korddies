import { View } from 'react-native';
import React from 'react';

import {
  MyMeetingsHeader,
  MyMeetingCardList,
} from '@modules/groupMeeting/components/MyMeetings';
import {
  myMeetingCardType01,
  myMeetingCardType02,
  myMeetingCardType03,
  myMeetingCardType04,
  myMeetingCardType05,
} from '@modules/groupMeeting/mock/myMeetingCardItems';

const MyMeetingsSection = () => {
  const { headerTitle, payload } = {
    headerTitle: {
      left: '나의 모임',
      right: '모두 보기',
    },
    payload: [
      myMeetingCardType01,
      myMeetingCardType02,
      myMeetingCardType03,
      myMeetingCardType04,
      myMeetingCardType05,
    ],
  };

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

export default MyMeetingsSection;
