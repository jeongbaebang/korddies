import { StyleSheet, View } from 'react-native';
import React from 'react';
import { WithIcon, WithIconStyle } from '@shared/components/Text';
import { sizeConverter } from '@shared/constants/designSystem';
import { IconType } from '@shared/components/Icons';
import DetailPeopleItem, { DetailPeopleItemProps } from './DetailPeopleItem';

type Props = {
  data: DetailPeopleItemProps[];
};

const DetailPeopleList: React.FC<Props> = ({ data = [] }) => {
  const { border, withIconStyle, innerStyle } = {
    innerStyle: {
      backgroundColor: '#FFFFFF',
    },
    border: {
      borderColor: '#EAEAEA',
    },
    withIconStyle: {
      gap: sizeConverter(10),
      font: {
        color: '#1B1A57',
        fontSize: sizeConverter(11),
      },
      icon: {
        color: '#1B1A57',
        size: sizeConverter(16),
      },
    } as WithIconStyle,
  };
  const users = `${data.length} People`;

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.innerContainer, innerStyle]}>
        <View style={styles.contentContainer}>
          <View style={[styles.peopleContainer, border]}>
            <WithIcon
              style={withIconStyle}
              iconType={IconType.CircleUser}
              contentText={users}
            />
          </View>
          {data.map((item, index) => (
            <DetailPeopleItem key={index} {...item} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default DetailPeopleList;

const styles = StyleSheet.create({
  contentContainer: {
    gap: sizeConverter(15),
    marginHorizontal: 17,
    marginVertical: 15,
    minHeight: 100,
  },
  innerContainer: {
    borderRadius: 10,
    flex: 1,
    margin: 20,
  },
  outerContainer: {
    flex: 1,
  },
  peopleContainer: {
    borderBottomWidth: 1,
    height: 33,
  },
});
