import { PixelRatio } from 'react-native';
import { is, curry, __ } from 'ramda';
import { Cache } from './cache';

/**
 * @see https://github.com/jeongbaebang/korddies/wiki/Docs#generateResponsiveStyle
 */
const generateResponsiveStyle = (
  currentDeviceWidth: number,
  referenceDeviceWidth: number,
  computeCore: ComputeCoreFn = defaultComputeCore,
) => {
  const cache = new Cache<number, number>();

  return (targetSize: number) => {
    return cache.calculate(
      is(Number, targetSize) ? targetSize : 0,
      curry(computeCore)(__, currentDeviceWidth, referenceDeviceWidth),
    );
  };
};

type CalculatedStyle = {
  [Key in string]: string | number;
};

/**
 * @see https://github.com/jeongbaebang/korddies/wiki/Docs#responsiveStyleAdapter
 */
const responsiveStyleAdapter = (converter: (targetSize: number) => number) => {
  const transformStyleProperty = (
    calculatedStyle: CalculatedStyle,
    [styleKey, styleValue]: [string, string | number],
  ) => {
    if (is(Number, styleValue)) {
      calculatedStyle[styleKey] = converter(styleValue);
    } else {
      calculatedStyle[styleKey] = styleValue;
    }

    return calculatedStyle;
  };

  return <T extends CalculatedStyle>(style: T) => {
    return Object.entries(style).reduce(transformStyleProperty, {}) as T;
  };
};

type ComputeCoreFn = (
  styleSize: number,
  currentDeviceWidth: number,
  referenceDeviceWidth: number,
) => number;

const defaultComputeCore: ComputeCoreFn = (
  styleSize,
  currentDeviceWidth,
  referenceDeviceWidth,
) => {
  return Math.round(
    PixelRatio.roundToNearestPixel(
      styleSize * (currentDeviceWidth / referenceDeviceWidth),
    ),
  );
};

export {
  generateResponsiveStyle,
  responsiveStyleAdapter,
  defaultComputeCore as styleCalculatorCore,
};
