import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';

import { Icon, IconType } from '@shared/components/Icons';
import {
  sizeConverter,
  convertToResponsiveStyle,
} from '@shared/constants/designSystem';

type Props = {
  leftContent: LeftContent;
  rightContent: RightContent;
};

/**
 * [LeftContent]
 * 이벤트 날짜 표시 컴포넌트
 * - 시스템 날짜와 이벤트 날짜가 동일하면 강조
 *
 * [RightContent]
 * 이벤트 정보 표시 컴포넌트
 * 제목, 설명, 시간, 인원수
 */
const MeetingCard: React.FC<Props> = ({ leftContent, rightContent }) => {
  const { border } = {
    border: {
      borderColor: '#E6E6EA',
    },
  };

  return (
    <View style={[styles.outerContainer, border]}>
      <View style={styles.innerContainer}>
        <View style={styles.contentContainer}>
          <LeftContent data={leftContent} />
          <RightContent data={rightContent} />
        </View>
      </View>
    </View>
  );
};

type LeftContent = {
  month: string;
  day: string;
};

const LeftContent: React.FC<{ data: LeftContent }> = ({ data }) => {
  const { color, font } = {
    color: {
      backgroundColor: '#F2F3F6',
    },
    font: {
      common: {
        color: '#4F5E7B',
        fontWeight: 'bold',
      },
      top: {
        fontSize: sizeConverter(11),
      },
      bottom: {
        fontSize: sizeConverter(18),
      },
    } as { [key: string]: TextStyle },
  };

  return (
    <View style={[leftStyles.contentContainer, color]}>
      <View style={leftStyles.content}>
        <Text style={[font.common, font.top]}>{data.month}</Text>
        <Text style={[font.common, font.bottom]}>{data.day}</Text>
      </View>
    </View>
  );
};

type RightContent = {
  title: string;
  description: string;
  info: {
    time: string;
    peoples: string;
  };
};

const RightContent: React.FC<{ data: RightContent }> = ({ data }) => {
  const { info, description, title } = {
    title: {
      font: {
        fontSize: sizeConverter(15),
        color: '#1B1A57',
      },
    },
    description: {
      font: {
        fontSize: sizeConverter(11),
        color: '#4F5E7B',
      },
    },
    info: {
      icon: {
        size: sizeConverter(12),
        color: '#E6E6EA',
      },
      font: {
        fontSize: sizeConverter(11),
        color: '#4F5E7B',
      },
    },
  };

  return (
    <View style={rightStyles.container}>
      {/* 이벤트 제목 */}
      <Text style={title.font}>{data.title}</Text>
      {/* 이벤트 설명 */}
      <Text style={description.font}>{data.description}</Text>
      <View style={rightStyles.infoContainer}>
        {/* 이벤트 시간 */}
        <View style={rightStyles.infoContent}>
          <Icon
            type={IconType.Clock}
            size={info.icon.size}
            color={info.icon.color}
          />
          <Text style={info.font}>{data.info.time}</Text>
        </View>
        {/* 이벤트 인원 */}
        <View style={rightStyles.infoContent}>
          <Icon
            type={IconType.UserGroup}
            size={info.icon.size}
            color={info.icon.color}
          />
          <Text style={info.font}>{data.info.peoples}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    gap: sizeConverter(15),
  },
  innerContainer: {},
  outerContainer: convertToResponsiveStyle({
    borderBottomWidth: 1,
    minHeight: 100,
    paddingHorizontal: 20,
    paddingVertical: 19,
  }),
});

const leftStyles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  contentContainer: convertToResponsiveStyle({
    alignItems: 'center',
    borderRadius: 5,
    height: 47,
    justifyContent: 'center',
    width: 35,
  }),
});

const rightStyles = StyleSheet.create({
  container: convertToResponsiveStyle({
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 60,
  }),
  infoContainer: convertToResponsiveStyle({
    flexDirection: 'row',
    gap: 15,
    marginTop: 3,
  }),
  infoContent: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: sizeConverter(5),
  },
});

export default MeetingCard;
export type { Props as MeetingCardProps };
