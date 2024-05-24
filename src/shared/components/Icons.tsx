import React from 'react';
import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';

export type IconProps = Omit<Props, 'icon'> & { focused?: boolean };

export const HouseIcon = (props: IconProps) => {
  return <FontAwesomeIcon icon={faHouse} {...props} />;
};

export const SearchIcon = (props: IconProps) => {
  return <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />;
};

export const PlusIcon = (props: IconProps) => {
  return <FontAwesomeIcon icon={faPlus} {...props} />;
};

export const CirclePlusIcon = (props: IconProps) => {
  return <FontAwesomeIcon icon={faCirclePlus} {...props} />;
};

export const ClockIcon = (props: IconProps) => {
  return <FontAwesomeIcon icon={faClock} {...props} />;
};

export const UserGroupIcon = (props: IconProps) => {
  return <FontAwesomeIcon icon={faUserGroup} {...props} />;
};
