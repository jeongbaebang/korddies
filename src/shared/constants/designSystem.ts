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

export { sizeConverter };
