import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';

import type { MissionCardProps } from './MissionCard';
import MissionCard from './MissionCard';
import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';

type Props = {
  data: MissionCardProps[];
};

const MissionCardList: React.FC<Props> = (props) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollViewContainer}
      showsHorizontalScrollIndicator={false}
      snapToInterval={sizeConverter(258)}
      decelerationRate="fast">
      {props.data.map((item, index) => {
        return <MissionCard key={index} {...item} />;
      })}
    </ScrollView>
  );
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
