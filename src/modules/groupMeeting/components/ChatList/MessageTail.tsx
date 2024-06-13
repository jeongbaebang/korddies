import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MessageTail = (props: SvgProps) => (
  <Svg width={9} height={13} fill="none" {...props}>
    <Path
      fill={props.color}
      d="M8.7 5.808C8.476 1.303 4.404-.014.932.36c.913 1.437 3.278 4.476 3.066 12.113 2.645 0 4.702-3.665 4.702-6.665Z"
    />
  </Svg>
);
export default MessageTail;
