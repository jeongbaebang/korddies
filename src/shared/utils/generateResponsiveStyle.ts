import { PixelRatio, TextStyle, ViewStyle } from 'react-native';
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
  const converter = (targetSize: number): number => {
    return cache.calculate(
      is(Number, targetSize) ? targetSize : 0,
      curry(computeCore)(__, currentDeviceWidth, referenceDeviceWidth),
    );
  };

  return converter;
};

type CombinedStyleKeys = keyof TextStyle | keyof ViewStyle;

type CombinedStyle = {
  [Key in CombinedStyleKeys]: Key extends keyof TextStyle
    ? TextStyle[Key]
    : Key extends keyof ViewStyle
      ? ViewStyle[Key]
      : never;
};

type CalculatedStyle = {
  [Key in string]: string | number;
};

/**
 * @see https://github.com/jeongbaebang/korddies/wiki/Docs#responsiveStyleAdapter
 */
const responsiveStyleAdapter = (
  converter: (targetSize: number) => number,
  options: CombinedStyleKeys[] = ['flex'],
) => {
  const transformStyleProperty = (
    calculatedStyle: CalculatedStyle,
    [styleKey, styleValue]: any[],
  ) => {
    if (options.includes(styleKey) || !is(Number, styleValue)) {
      calculatedStyle[styleKey] = styleValue;
    } else {
      calculatedStyle[styleKey] = converter(styleValue);
    }

    return calculatedStyle;
  };

  return <T extends Partial<CombinedStyle>>(style: T) => {
    return Object.entries(style).reduce(transformStyleProperty, {});
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
