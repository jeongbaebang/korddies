import { View } from 'react-native';
import React from 'react';

import {
  LinkMissionCardProps,
  MissionCardFullWidth,
  MissionCardList,
  MissionEventHeader,
} from '@modules/groupMeeting/components/MissionEventList';
import {
  MissionCardNames,
  missionCardHeaderTitleMap,
  missionCardItemMap,
} from '@modules/groupMeeting/assets/content/missionEventItems';

type EventSectionBlockProps = {
  cardKeys: MissionCardNames[];
  headerTitle: string;
  RenderItem: (props: LinkMissionCardProps) => React.JSX.Element;
};

const EventSectionBlock: React.FC<EventSectionBlockProps> = ({
  cardKeys,
  headerTitle,
  RenderItem,
}) => {
  return (
    <View>
      <MissionEventHeader text={headerTitle} />
      <MissionCardList data={cardKeys} CardItem={RenderItem} />
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

export { EventSectionBlock, EventDetailSection };
