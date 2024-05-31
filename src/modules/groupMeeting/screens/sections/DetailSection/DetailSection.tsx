import React from 'react';

import DetailSectionBlock from './DetailSectionBlock';
import { detailPeopleItems } from '@modules/groupMeeting/mock/detailPeopleItem';

/**
 * SERVER FETCH LAYERS
 */
const DetailSection = () => {
  const { payload } = {
    payload: {
      info: {
        title: '이수 보드게임',
        time: '오후 07:00',
        users: '5/6명',
        address: 'Board game Cafe Holmes & Lupin Isu stat..',
        description: 'Let’s play boardgame nearby Isu station!',
        onPress: () => {},
      },
      peoples: detailPeopleItems,
    },
  };

  return <DetailSectionBlock payload={payload} />;
};

export default DetailSection;
