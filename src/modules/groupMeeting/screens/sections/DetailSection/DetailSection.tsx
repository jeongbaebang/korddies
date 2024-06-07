import React from 'react';

import DetailSectionBlock from './DetailSectionBlock';
import { detailPeopleItems } from '@modules/groupMeeting/mock/detailPeopleItem';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '@navigation/screenNames';

/**
 * SERVER FETCH LAYERS
 */
const DetailSection = () => {
  const navigation = useNavigation();
  const { payload } = {
    payload: {
      info: {
        title: '이수 보드게임',
        time: '오후 07:00',
        users: '5/6명',
        address: 'Board game Cafe Holmes & Lupin Isu stat..',
        description: 'Let’s play boardgame nearby Isu station!',
        onPress: () => {
          navigation.navigate(ScreenNames.GROUP_MEETING_DETAIL_CHAT);
        },
      },
      peoples: detailPeopleItems,
    },
  };

  return <DetailSectionBlock payload={payload} />;
};

export default DetailSection;
