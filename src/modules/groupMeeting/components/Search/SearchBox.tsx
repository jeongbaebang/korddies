import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { Icon, IconType } from '@shared/components/Icons';
import { sizeConverter } from '@shared/constants/designSystem';

const SearchBox = () => {
  const { innerStyle, icon } = {
    innerStyle: {
      backgroundColor: '#ffffff',
      shadowColor: '#000',
    },
    icon: {
      type: IconType.Search,
      size: sizeConverter(20),
    },
  };

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.innerContainer, innerStyle]}>
        <View style={styles.contentContainer}>
          <Icon type={icon.type} size={icon.size} />
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 13,
    overflow: 'hidden',
  },
  innerContainer: {
    borderRadius: 56,
    elevation: 10,
    minHeight: 45,
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
  outerContainer: {
    minHeight: 45,
    paddingHorizontal: 20,
  },
});
