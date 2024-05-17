import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sizeConverter } from '@shared/constants/designSystem';
import { IconProps, PlusIcon, SerchIcon } from '@shared/components/Icons';

const GroupMeetingScreenHeader: (
  props: NativeStackHeaderProps,
) => React.ReactNode = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{ marginTop: insets.top }, styles.outerContainer]}>
      <View style={styles.innerContainer}>
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

const RightActionButtons = () => {
  const options = {
    size: sizeConverter(18),
    color: '#4F5E7B',
  };

  return (
    <View style={styles.rightActionContainer}>
      <ActionButton Icon={SerchIcon} {...options} />
      <ActionButton Icon={PlusIcon} {...options} />
    </View>
  );
};

type Button = {
  onPress?: () => void;
  size: number;
  color: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

const ActionButton: React.FC<Button> = ({ Icon, color, size, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.rightActionButton}>
      <Icon size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: sizeConverter(22),
  },
  outerContainer: {
    justifyContent: 'center',
    maxHeight: 150,
    minHeight: sizeConverter(60),
  },
  rightActionButton: {
    alignItems: 'center',
    aspectRatio: 1.0,
    justifyContent: 'center',
    width: sizeConverter(24),
  },
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
