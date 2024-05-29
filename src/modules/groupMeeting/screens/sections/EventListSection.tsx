import { View } from 'react-native';
import React from 'react';

import {
  LinkMissionCardProps,
  MissionCard,
  MissionCardFullWidth,
  MissionCardList,
  MissionEventHeader,
} from '@modules/groupMeeting/components/MissionEventList';
import { ScreenNames } from '@navigation/screenNames';
import Link from '@shared/components/Link';
import {
  MissionCardNames,
  MissionCardType,
  missionCardHeaderTitleMap,
  missionCardItemMap,
} from '@modules/groupMeeting/assets/content/missionEventItems';

const EventListSection = () => {
  return (
    <View>
      <MissionEventHeader
        text={missionCardHeaderTitleMap[MissionCardType.HOME]}
      />
      <MissionCardList
        data={[MissionCardType.KYUNGBOK, MissionCardType.KOREA_SPA]}
        ItemComponent={LinkMissionCard}
      />
    </View>
  );
};

const EventDetailSection: React.FC<{ type: MissionCardNames }> = (props) => {
  return (
    <View>
      <MissionEventHeader text={missionCardHeaderTitleMap[props.type]} />
      <MissionCardFullWidth {...missionCardItemMap[props.type]} />
    </View>
  );
};

const LinkMissionCard = (props: LinkMissionCardProps) => {
  const LinkToEventDetailScreen = Link(
    MissionCard,
    ScreenNames.GROUP_MEETING_EVENT_DETAIL,
    { cardType: props.cardType },
  );

  return <LinkToEventDetailScreen {...props} />;
};

export default EventListSection;
export { EventDetailSection };
