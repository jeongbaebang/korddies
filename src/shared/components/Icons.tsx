import React from 'react';
import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

export type IconProps = Omit<Props, 'icon'> & { focused?: boolean };

const HouseIcon = (props: IconProps) => {
  return <FontAwesomeIcon icon={faHouse} {...props} />;
};

const SerchIcon = (props: IconProps) => {
  return <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />;
};

const PlusIcon = (props: IconProps) => {
  return <FontAwesomeIcon icon={faPlus} {...props} />;
};

export { HouseIcon, SerchIcon, PlusIcon };
