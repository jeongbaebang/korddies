import React from 'react';
import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';

type IconProps = Omit<Props, 'icon'> & { focused?: boolean };

const HouseIcon = (props: IconProps) => {
  return <FontAwesomeIcon icon={faHouse} {...props} />;
};

export { HouseIcon };
