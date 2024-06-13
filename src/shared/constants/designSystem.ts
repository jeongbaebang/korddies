import { Dimensions } from 'react-native';

import {
  generateResponsiveStyle,
  responsiveStyleAdapter,
} from '@shared/utils/generateResponsiveStyle';
import { calculateMaxChars } from '@shared/utils/calculateMaxChars';

const currentDeviceWidth = Dimensions.get('window').width;
const referenceDeviceWidth = 393; // iPhone 15
const sizeConverter = generateResponsiveStyle(
  currentDeviceWidth,
  referenceDeviceWidth,
);
const convertToResponsiveStyle = responsiveStyleAdapter(sizeConverter, [
  'flex',
  'aspectRatio',
]);
const MAX_CHARS = calculateMaxChars(referenceDeviceWidth, currentDeviceWidth, {
  baseCharCount: 40, // 글자 최대 길이
});

const theme = {
  color: {
    dark: {
      type01: '#DC3644',
      type02: '#2F80ED',
      type03: '#F2F2F2',
      type04: '#272C3B',
    },
    light: {
      type01: '#DC3644',
      type02: '#2F80ED',
      type03: '#F2F2F2',
      type04: '#272C3B',
    },
  },
  font: {
    family: '',
  },
} as const;

export { sizeConverter, convertToResponsiveStyle, theme, MAX_CHARS };
