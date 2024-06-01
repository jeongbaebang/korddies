import { View } from 'react-native';
import React from 'react';

import {
  MeetingCardList,
  MeetingCardProps,
} from '@modules/groupMeeting/components/MeetingList';

type Props = {
  payload: MeetingCardProps[];
  RenderItem: (props: MeetingCardProps) => React.JSX.Element;
};

const MeetingListSectionBlock: React.FC<Props> = ({ payload, RenderItem }) => {
  return (
    <View>
      <MeetingCardList data={payload} CardItem={RenderItem} />
    </View>
  );
};

export { MeetingListSectionBlock };
