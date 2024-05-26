import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';

import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';
import MyMeetingCard, { MyMeetingCardProps } from './MyMeetingCard';

type Props = {
  data: MyMeetingCardProps[];
};

const MyMeetingCardList: React.FC<Props> = (props) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollViewContainer}
      showsHorizontalScrollIndicator={false}
      snapToInterval={sizeConverter(80)}
      decelerationRate="fast">
      {props.data.map((item, index) => {
        return <MyMeetingCard key={index} {...item} />;
      })}
    </ScrollView>
  );
};

export default MyMeetingCardList;

const styles = StyleSheet.create({
  scrollViewContainer: convertToResponsiveStyle({
    flexDirection: 'row',
    gap: 8,
    height: 123,
    paddingHorizontal: 20,
  }),
});
