import React, { useState } from 'react';

import {
  BackActionButton,
  ScreenHeader,
} from '@modules/groupMeeting/components/Header';
import {
  ActionButtonProps,
  ActionIconButton,
} from '@shared/components/Buttons';
import { sizeConverter } from '@shared/constants/designSystem';
import { IconType } from '@shared/components/Icons';
import { StyleSheet } from 'react-native';

type Props = {
  title: string;
  count: number;
  onBackPress: () => void;
};

const ChatHeaderBlock: React.FC<Props> = ({ title, count, onBackPress }) => {
  return (
    <ScreenHeader
      titleOptions={{
        title: title,
        style: styles.title,
        align: 'center',
        count: isNaN(count) ? 0 : Math.abs(count),
      }}
      LeftAction={<BackActionButton onPress={onBackPress} />}
      RightAction={<NotificationIconButton />}
    />
  );
};

const NotificationIconButton = () => {
  const [active, setActive] = useState(true);

  const options: ActionButtonProps = {
    size: sizeConverter(active ? 20 : 25),
    color: '#1B1A57',
    type: active ? IconType.Bell : IconType.BellSlash,
    onPress: () => setActive((prev) => !prev),
  };

  return <ActionIconButton {...options} />;
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: sizeConverter(17),
  },
});

export default ChatHeaderBlock;
export { type Props as ChatHeaderBlockProps };
