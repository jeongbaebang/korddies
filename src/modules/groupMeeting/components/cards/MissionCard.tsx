import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';

type Props = {
  backgroundColor: string;
  leftContent: LeftContent;
  RightContent: () => React.JSX.Element;
};

const MissionCard: React.FC<Props> = ({
  backgroundColor,
  leftContent,
  RightContent,
}) => {
  return (
    <View style={[styles.outerContainer, { backgroundColor }]}>
      <View style={styles.innerContainer}>
        <View style={styles.contentContainer}>
          <LeftContent data={leftContent} />
          <View style={rightStyles.container}>
            <RightContent />
          </View>
        </View>
      </View>
    </View>
  );
};

type LeftContent = {
  title: string;
  description: string;
  date: string;
};

const LeftContent: React.FC<{ data: LeftContent }> = ({ data }) => {
  const { title, description, date } = {
    title: {
      font: {
        fontSize: sizeConverter(15),
        fontWeight: 'bold',
        color: '#1B1A57',
      } as TextStyle,
    },
    description: {
      font: {
        fontSize: sizeConverter(11),
        fontWeight: 'bold',
        color: '#4F5E7B',
      } as TextStyle,
    },
    date: {
      font: {
        fontSize: sizeConverter(11),
        color: '#4F5E7B',
      } as TextStyle,
      backgroundColor: {
        backgroundColor: '#FFFFFF',
      },
    },
  };

  return (
    <View style={leftStyles.container}>
      {/* 미션 제목 */}
      <Text style={title.font}>{data.title}</Text>
      {/* 미션 내용 */}
      <Text style={description.font}>{data.description}</Text>
      {/* 미션 기간 */}
      <View style={[leftStyles.dateContainer, date.backgroundColor]}>
        <Text style={date.font}>{data.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    height: '100%',
  },
  innerContainer: {},
  outerContainer: convertToResponsiveStyle({
    width: 274,
    height: 102,
    borderRadius: 10,
    overflow: 'hidden',
  }),
});

const leftStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: sizeConverter(14),
    marginVertical: sizeConverter(19),
  },
  dateContainer: convertToResponsiveStyle({
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
  }),
});

const rightStyles = StyleSheet.create({
  container: {
    width: sizeConverter(89 - 14), // 14 = marginLeft
  },
});

export default MissionCard;
export type { Props as MissionCardProps };
