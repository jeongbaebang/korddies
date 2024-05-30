import React from 'react';

import {
  myMeetingCardType01,
  myMeetingCardType02,
  myMeetingCardType03,
  myMeetingCardType04,
  myMeetingCardType05,
} from '@modules/groupMeeting/mock/myMeetingCardItems';
import { MyMeetingsSectionBlock } from './MyMeetingsSectionBlock';

/**
 * SERVER FETCH LAYERS
 */
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

  return <MyMeetingsSectionBlock headerTitle={headerTitle} payload={payload} />;
};

export default MyMeetingsSection;
