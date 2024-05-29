import React from 'react';

import {
  MissionCardType,
  missionCardHeaderTitleMap,
} from '@modules/groupMeeting/assets/content/missionEventItems';
import { LinkMissionCard } from '@modules/groupMeeting/components/MissionEventList/MissionCard';
import { EventSectionBlock } from './EventSectionBlock';

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
