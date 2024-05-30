import React from 'react';

import { mockMeetingCard } from '@modules/groupMeeting/mock/meetingCardItems';
import { MeetingListSectionBlock } from './MeetingListSectionBlock';

/**
 * SERVER FETCH LAYERS
 */
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

  return <MeetingListSectionBlock payload={payload} />;
};

export default MeetingListSection;
