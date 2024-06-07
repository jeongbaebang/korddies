import React from 'react';

import {
  MissionCardType,
  missionCardHeaderTitleMap,
} from '@modules/groupMeeting/assets/content/missionEventItems';
import { EventSectionBlock } from './EventSectionBlock';
import { LinkMissionCard } from '@modules/groupMeeting/components/MissionEventList';

const EventListSection = () => {
  return (
    <EventSectionBlock
      headerTitle={missionCardHeaderTitleMap[MissionCardType.HOME]}
      cardKeys={[MissionCardType.KYUNGBOK, MissionCardType.KOREA_SPA]}
      RenderItem={LinkMissionCard}
    />
  );
};

export default EventListSection;
