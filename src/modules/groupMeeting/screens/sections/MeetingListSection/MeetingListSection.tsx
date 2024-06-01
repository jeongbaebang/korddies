import React from 'react';

import { mockMeetingCard } from '@modules/groupMeeting/mock/meetingCardItems';
import { MeetingListSectionBlock } from './MeetingListSectionBlock';
import { LinkMeetingCard } from '@modules/groupMeeting/components/MeetingList/MeetingCard';

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

  return (
    <MeetingListSectionBlock payload={payload} RenderItem={LinkMeetingCard} />
  );
};

export default MeetingListSection;
