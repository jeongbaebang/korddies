import React from 'react';

import ChatHeaderBlock, { ChatHeaderBlockProps } from './ChatHeaderBlock';
import { useNavigation } from '@react-navigation/native';

/**
 * SERVER FETCH LAYERS
 */
const ChatHeaderSection = () => {
  const { canGoBack, goBack } = useNavigation();
  const options: ChatHeaderBlockProps = {
    title: '이수 보드게임',
    count: 5,
    onBackPress: () => {
      if (canGoBack()) {
        goBack();
      }
    },
  };

  return <ChatHeaderBlock {...options} />;
};

export default ChatHeaderSection;
