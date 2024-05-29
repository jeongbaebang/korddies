import { ScrollView, StyleSheet } from 'react-native';
import React, { ComponentType } from 'react';

import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';
import {
  MissionCardNames,
  missionCardItemMap,
} from '@modules/groupMeeting/assets/content/missionEventItems';
import { MissionCardProps } from './MissionCard';

type ItemComponentProps = MissionCardProps & {
  cardType: MissionCardNames;
};

type Props = {
  data: MissionCardNames[];
  CardItem: ComponentType<ItemComponentProps>;
};

const MissionCardList: React.FC<Props> = ({ CardItem, data }) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollViewContainer}
      showsHorizontalScrollIndicator={false}
      snapToInterval={sizeConverter(258)}
      decelerationRate="fast">
      {data.map((item, index) => {
        return <CardItem key={index} {...generateMissionCardProps(item)} />;
      })}
    </ScrollView>
  );
};

const generateMissionCardProps = (
  cardType: MissionCardNames,
): ItemComponentProps => {
  return {
    ...missionCardItemMap[cardType],
    cardType: cardType,
  };
};

const styles = StyleSheet.create({
  scrollViewContainer: convertToResponsiveStyle({
    flexDirection: 'row',
    gap: 10,
    height: 118,
    paddingHorizontal: 20,
    paddingVertical: 8,
  }),
});

export default MissionCardList;
export type { ItemComponentProps as LinkMissionCardProps };
