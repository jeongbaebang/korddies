import React, { PropsWithChildren } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  convertToResponsiveStyle,
  sizeConverter,
} from '@shared/constants/designSystem';
import { IconType } from '@shared/components/Icons';
import {
  ActionButtonProps,
  ActionIconButton,
} from '@shared/components/Buttons';

type OnBackPress = () => void;
type HeaderProps = {
  canGoBack?: boolean;
  onBackPress?: OnBackPress;
};

const ScreenHeader: React.FC<HeaderProps> = ({ canGoBack, onBackPress }) => {
  return (
    <ScreenHeaderLayout>
      {canGoBack ? <LeftActionButton onPress={onBackPress} /> : null}
      <HeaderTitle />
      <RightActionButtons />
    </ScreenHeaderLayout>
  );
};

const DetailScreenHeader: React.FC<HeaderProps & { imageURI: string }> = ({
  onBackPress,
  imageURI,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={{
        uri: imageURI,
      }}
      style={[styles.imageContainer, { marginTop: insets.top }]}
      resizeMode="cover">
      <ScreenHeaderLayout safeArea={false}>
        <LeftActionButton onPress={onBackPress} />
      </ScreenHeaderLayout>
    </ImageBackground>
  );
};

const ScreenHeaderLayout: React.FC<
  PropsWithChildren & { safeArea?: boolean }
> = ({ children, safeArea = true }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        { marginTop: safeArea ? insets.top : undefined },
        styles.outerContainer,
      ]}>
      <View style={styles.innerContainer}>{children}</View>
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
      <ActionIconButton onPress={onPress} {...options} />
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
      <ActionIconButton type={IconType.Search} {...options} />
      <ActionIconButton type={IconType.CirclePlus} {...options} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: sizeConverter(130),
  },
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

export default ScreenHeader;
export { DetailScreenHeader as GroupMeetingDetailScreenHeader };
