import { View } from 'react-native';
import React from 'react';

import {
  MissionCardList,
  MissionEventHeader,
} from '@modules/groupMeeting/components/MissionEventList';
import { type01, type02 } from '@modules/groupMeeting/mock/missionCardItems';

const EventListSection = () => {
  const { headerTitle, payload } = {
    headerTitle: '먼저 코디즈 미션 이벤트를 참여해볼까요?',
    payload: [type01, type02],
  };

  return (
    <View>
      <MissionEventHeader text={headerTitle} />
      <MissionCardList data={payload} />
    </View>
  );
};

export default EventListSection;
