import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import {
  sizeConverter,
  convertToResponsiveStyle,
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
  fullWidth?: boolean;
  leftContent: LeftContent;
  RightContent: () => React.JSX.Element;
};

const MissionCard: React.FC<Props> = ({
  backgroundColor,
  fullWidth,
  leftContent,
  RightContent,
}) => {
  const outerContainerStyle = fullWidth
    ? styles.outerContainerFullWidth
    : [styles.outerContainer, { backgroundColor }];

  const innerContainerStyle = fullWidth
    ? { ...styles.innerContainer, backgroundColor }
    : styles.innerContainer;

  return (
    <View style={outerContainerStyle}>
      <View style={innerContainerStyle}>
        <View style={styles.contentContainer}>
          <LeftContent payload={leftContent} />
          <RightContent />
        </View>
      </View>
    </View>
  );
};

const LeftContent: React.FC<{ payload: LeftContent }> = ({ payload }) => {
  const DESCRIPTION_TEXT_MAX_LINE = 2;

  return (
    <View style={styles.leftContentContainer}>
      <View>
        <Text style={[styles.leftContentTitleFont, payload.title.font]}>
          {payload.title.text}
        </Text>
      </View>
      <View style={styles.leftContentDescriptionContainer}>
        <Text
          numberOfLines={DESCRIPTION_TEXT_MAX_LINE}
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
  leftContentDateContainer: convertToResponsiveStyle({
    alignItems: 'center',
    borderRadius: 4,
    height: 18,
    justifyContent: 'center',
    width: 136,
  }),
  leftContentDateFont: convertToResponsiveStyle({
    fontSize: 8,
    lineHeight: 18 / 2, // leftContentDateContainer 높이
    textAlign: 'center',
    textAlignVertical: 'center',
  }),
  leftContentDescriptionContainer: convertToResponsiveStyle({
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
  outerContainer: {
    borderRadius: sizeConverter(5),
    flex: 1,
    width: sizeConverter(258),
  },
  outerContainerFullWidth: convertToResponsiveStyle({
    height: 127,
    paddingHorizontal: 18,
    paddingVertical: 14,
    width: '100%',
  }),
});

export default MissionCard;

export type { Props as MissionCardProps };
