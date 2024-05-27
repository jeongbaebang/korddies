import { View } from 'react-native';
import React from 'react';

import { MeetingCardList } from '@modules/groupMeeting/components/MeetingList';
import { mockMeetingCard } from '@modules/groupMeeting/mock/meetingCardItems';

const MeetingListSection = () => {
  const { payload } = {
    payload: [
      mockMeetingCard,
      mockMeetingCard,
      mockMeetingCard,
      mockMeetingCard,
      mockMeetingCard,
      mockMeetingCard,
      mockMeetingCard,
    ],
  };

  return (
    <View>
      <MeetingCardList data={payload} />
    </View>
  );
};

export default MeetingListSection;
