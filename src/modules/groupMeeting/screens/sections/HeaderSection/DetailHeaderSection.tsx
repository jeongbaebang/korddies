import React from 'react';
import { useNavigation } from '@react-navigation/native';

import DetailHeaderBlock, { DetailHeaderBlockProps } from './DetailHeaderBlock';
import { cardImage01 } from '@modules/groupMeeting/mock/myMeetingCardItems';

/**
 * SERVER FETCH LAYERS
 */
const DetailHeaderSection = () => {
  const { canGoBack, goBack } = useNavigation();
  const options: DetailHeaderBlockProps = {
    imageURI: cardImage01,
    onBackPress: () => {
      if (canGoBack()) {
        goBack();
      }
    },
  };

  return <DetailHeaderBlock {...options} />;
};

export default DetailHeaderSection;
