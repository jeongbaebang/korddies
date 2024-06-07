import React from 'react';
import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons/faCommentDots';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons/faBellSlash';

export enum IconType {
  House,
  Search,
  Plus,
  CirclePlus,
  Clock,
  UserGroup,
  PaperPlane,
  CommentDots,
  CircleUser,
  ChevronLeft,
  LocationDot,
  Bell,
  BellSlash,
}

export type IconProps = Omit<Props, 'icon'> & { focused?: boolean };

const iconMap: Record<IconType, React.ReactElement> = {
  [IconType.House]: <FontAwesomeIcon icon={faHouse} />,
  [IconType.Search]: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  [IconType.Plus]: <FontAwesomeIcon icon={faPlus} />,
  [IconType.CirclePlus]: <FontAwesomeIcon icon={faCirclePlus} />,
  [IconType.Clock]: <FontAwesomeIcon icon={faClock} />,
  [IconType.UserGroup]: <FontAwesomeIcon icon={faUserGroup} />,
  [IconType.PaperPlane]: <FontAwesomeIcon icon={faPaperPlane} />,
  [IconType.CommentDots]: <FontAwesomeIcon icon={faCommentDots} />,
  [IconType.CircleUser]: <FontAwesomeIcon icon={faCircleUser} />,
  [IconType.ChevronLeft]: <FontAwesomeIcon icon={faChevronLeft} />,
  [IconType.LocationDot]: <FontAwesomeIcon icon={faLocationDot} />,
  [IconType.Bell]: <FontAwesomeIcon icon={faBell} />,
  [IconType.BellSlash]: <FontAwesomeIcon icon={faBellSlash} />,
};

type DynamicIconProps = IconProps & {
  type: IconType;
};

export const Icon: React.FC<DynamicIconProps> = ({ type, ...props }) => {
  const IconComponent = React.cloneElement(iconMap[type], props);

  return IconComponent;
};
