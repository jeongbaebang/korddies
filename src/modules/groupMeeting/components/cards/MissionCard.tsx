import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import {
  sizeConverter,
  converteToResponsiveStyle,
} from '@shared/constants/designSystem';

type Font = {
  color: string;
};

type Content = {
  font: Font;
  text: string;
};

type LeftContent = {
  title: Content;
  description: Content;
  date: Content & { backgroundColor: string };
};

type Props = {
  backgroundColor: string;
  leftContent: LeftContent;
  RightContent: () => React.JSX.Element;
};

const MissionCard: React.FC<Props> = ({
  RightContent,
  backgroundColor,
  leftContent,
}) => {
  return (
    <View style={[styles.outerContainer, { backgroundColor }]}>
      <View style={styles.innerContainer}>
        <View style={styles.contentContainer}>
          <LeftContent payload={leftContent} />
          <RightContent />
        </View>
      </View>
    </View>
  );
};

const LeftContent: React.FC<{ payload: LeftContent }> = ({ payload }) => {
  const DESCRIPTION_TEXT_MAXLINE = 2;

  return (
    <View style={styles.leftContentContainer}>
      <View>
        <Text style={[styles.leftContentTitleFont, payload.title.font]}>
          {payload.title.text}
        </Text>
      </View>
      <View style={styles.leftContentDescriptionContainer}>
        <Text
          numberOfLines={DESCRIPTION_TEXT_MAXLINE}
          style={[styles.leftContentDescriptionFont, payload.description.font]}>
          {payload.description.text}
        </Text>
      </View>
      <View
        style={[
          styles.leftContentDateContainer,
          { backgroundColor: payload.date.backgroundColor },
        ]}>
        <Text style={[styles.leftContentDateFont, payload.date.font]}>
          {payload.date.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: sizeConverter(11),
  },
  leftContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  leftContentDateContainer: converteToResponsiveStyle({
    alignItems: 'center',
    borderRadius: 4,
    height: 18,
    justifyContent: 'center',
    width: 136,
  }),
  leftContentDateFont: {
    fontSize: sizeConverter(8),
  },
  leftContentDescriptionContainer: converteToResponsiveStyle({
    marginBottom: 8,
    marginTop: 5,
  }),
  leftContentDescriptionFont: {
    fontSize: sizeConverter(11),
  },
  leftContentTitleFont: {
    fontSize: sizeConverter(15),
    fontWeight: 'bold',
  },
  outerContainer: converteToResponsiveStyle({
    borderRadius: 5,
    width: 258,
    flex: 1,
  }),
});

export default MissionCard;

export type { Props as MissionCardProps };
