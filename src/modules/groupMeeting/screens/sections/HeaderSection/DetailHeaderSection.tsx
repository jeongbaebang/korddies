import React from 'react';
import { useNavigation } from '@react-navigation/native';

import DetailHeaderBlock from './DetailHeaderBlock';
import { cardImage01 } from '@modules/groupMeeting/mock/myMeetingCardItems';

/**
 * SERVER FETCH LAYERS
 */
const DetailHeaderSection = () => {
  const navigation = useNavigation();

  const handler = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return <DetailHeaderBlock onBackPress={handler} imageURI={cardImage01} />;
};

export default DetailHeaderSection;
