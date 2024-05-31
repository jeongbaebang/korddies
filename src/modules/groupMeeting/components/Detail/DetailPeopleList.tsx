import { StyleSheet, View } from 'react-native';
import React from 'react';
import { WithIcon, WithIconStyle } from '@shared/components/Text';
import { sizeConverter } from '@shared/constants/designSystem';
import { IconType } from '@shared/components/Icons';
import DetailPeopleItem from './DetailPeopleItem';

type Props = {
  users: string;
};

const DetailPeopleList: React.FC<Props> = (props) => {
  const { border, withIconStyle } = {
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

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.contentContainer}>
          <View style={[styles.peopleContainer, border]}>
            <WithIcon
              style={withIconStyle}
              iconType={IconType.CircleUser}
              contentText={props.users}
            />
          </View>
          <DetailPeopleItem
            nickname="Adina"
            status="You"
            uri="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
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
