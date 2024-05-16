import { Dimensions } from 'react-native';
import {
  responsiveStyleAdapter,
  generateResponsiveStyle,
} from '../utils/generateResponsiveStyle';

const currentDeviceWidth = Dimensions.get('window').width;
const referenceDeviceWidth = 393; // iPhone 15
const sizeConverter = responsiveStyleAdapter(
  generateResponsiveStyle(currentDeviceWidth, referenceDeviceWidth),
);

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

export { sizeConverter, theme };
