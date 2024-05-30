import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';
import { IconType } from '@shared/components/Icons';
import ActionButton, {
  ActionButtonProps,
} from '@shared/components/ActionButton';

type OnBackPress = () => void;
type Props = {
  canGoBack?: boolean;
  onBackPress?: OnBackPress;
};

const GroupMeetingScreenHeader: React.FC<Props> = ({
  canGoBack,
  onBackPress,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{ marginTop: insets.top }, styles.outerContainer]}>
      <View style={styles.innerContainer}>
        {canGoBack ? <LeftActionButton onPress={onBackPress} /> : null}
        <HeaderTitle />
        <RightActionButtons />
      </View>
    </View>
  );
};

const HeaderTitle = () => {
  const options = {
    title: 'Let’s hang out with Korddies',
    color: '#1B1A57',
    fontSize: sizeConverter(18),
    maxLine: 5,
  };

  return (
    <View style={styles.titleContainer}>
      <Text
        style={[
          styles.title,
          { color: options.color, fontSize: options.fontSize },
        ]}
        numberOfLines={options.maxLine}>
        {options.title}
      </Text>
    </View>
  );
};

const LeftActionButton = ({ onPress }: { onPress?: OnBackPress }) => {
  const options: ActionButtonProps = {
    size: sizeConverter(20),
    color: '#1B1A57',
    type: IconType.ChevronLeft,
  };

  return (
    <View style={styles.leftActionContainer}>
      <ActionButton onPress={onPress} {...options} />
    </View>
  );
};

const RightActionButtons = () => {
  const options = {
    size: sizeConverter(20),
    color: '#1B1A57',
  };

  return (
    <View style={styles.rightActionContainer}>
      <ActionButton type={IconType.Search} {...options} />
      <ActionButton type={IconType.CirclePlus} {...options} />
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: sizeConverter(22),
  },
  leftActionContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: sizeConverter(-7),
    paddingRight: 10,
  },
  outerContainer: convertToResponsiveStyle({
    justifyContent: 'center',
    maxHeight: 150,
    minHeight: 60,
  }),
  rightActionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: sizeConverter(19),
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  titleContainer: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  },
});

export default GroupMeetingScreenHeader;
