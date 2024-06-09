import { StyleSheet, TextInput, View } from 'react-native';
import React, { Ref } from 'react';
import { Icon, IconType } from '@shared/components/Icons';
import {
  sizeConverter,
  convertToResponsiveStyle,
} from '@shared/constants/designSystem';

type Props = {};

const SearchInput = (_props: Props, ref: Ref<TextInput>) => {
  const options = {
    innerStyle: {
      backgroundColor: '#ffffff',
      shadowColor: '#000',
    },
    icon: {
      type: IconType.Search,
      size: sizeConverter(20),
      color: '#8D97B0',
    },
    input: {
      style: {
        fontSize: 15,
        color: '#8D97B0',
      },
      placeholder: '제목을 검색해주세요 (ex. 보드게임)',
    },
  };

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.innerContainer, options.innerStyle]}>
        <View style={styles.contentContainer}>
          <Icon {...options.icon} />
          <TextInput
            ref={ref}
            placeholder={options.input.placeholder}
            style={[styles.input, options.input.style]}
            clearButtonMode="always"
          />
        </View>
      </View>
    </View>
  );
};

export default React.forwardRef<TextInput>(SearchInput);

const styles = StyleSheet.create({
  contentContainer: convertToResponsiveStyle({
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 13,
    overflow: 'hidden',
  }),
  innerContainer: {
    borderRadius: sizeConverter(56),
    elevation: 10,
    minHeight: sizeConverter(45),
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  outerContainer: convertToResponsiveStyle({
    minHeight: 45,
    paddingHorizontal: 20,
  }),
});
