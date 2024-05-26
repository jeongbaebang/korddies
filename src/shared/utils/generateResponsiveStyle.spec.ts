import { PixelRatio } from 'react-native';
import {
  responsiveStyleAdapter,
  generateResponsiveStyle,
  styleCalculatorCore,
} from './generateResponsiveStyle';

// 테스트에 사용할 기기의 너비
const currentDeviceWidth = 400;
const referenceDeviceWidth = 393;

// 변환할 크기
const targetSize = 16;

// 변환 계산 함수
const testCore = (size: number) => {
  return Math.round(
    PixelRatio.roundToNearestPixel(
      size * (currentDeviceWidth / referenceDeviceWidth),
    ),
  );
};

describe('styleCalculator Function', () => {
  test('기준너비보다 큰 디바이스는 큰 크기로 계산되어야 한다.', () => {
    const deviceWidth = 400;
    const referenceWidth = 393;

    const targetSizes = [10, 50, 100, 200, 300, 400, 1000];
    const expectedSizes = [10, 51, 102, 204, 306, 407, 1018];

    targetSizes.forEach((size, index) => {
      expect(styleCalculatorCore(size, deviceWidth, referenceWidth)).toBe(
        expectedSizes[index],
      );
    });
  });

  test('기준너비보다 작은 디바이스는 작은 크기로 계산되어야 한다.', () => {
    const deviceWidth = 280;
    const referenceWidth = 393;

    const targetSizes = [10, 50, 100, 200, 300, 400, 1000];
    const expectedSizes = [7, 36, 71, 143, 214, 285, 713];

    targetSizes.forEach((size, index) => {
      expect(styleCalculatorCore(size, deviceWidth, referenceWidth)).toBe(
        expectedSizes[index],
      );
    });
  });

  test('기준너비와 동일한 디바이스는 동일한 크기값을 반환해야 한다.', () => {
    const deviceWidth = 393;
    const referenceWidth = 393;

    const targetSizes = [10, 50, 100, 200, 300, 400, 1000];
    const expectedSizes = [10, 50, 100, 200, 300, 400, 1000];

    targetSizes.forEach((size, index) => {
      expect(styleCalculatorCore(size, deviceWidth, referenceWidth)).toBe(
        expectedSizes[index],
      );
    });
  });
});

describe('generateResponsiveStyle Function', () => {
  let relativeSizeConverter: (size: number) => number;

  beforeEach(() => {
    relativeSizeConverter = generateResponsiveStyle(
      currentDeviceWidth,
      referenceDeviceWidth,
      testCore,
    );
  });

  test('함수를 호출하면 함수를 반환해야 한다.', () => {
    expect(
      typeof generateResponsiveStyle(
        currentDeviceWidth,
        referenceDeviceWidth,
        testCore,
      ),
    ).toBe('function');
  });

  test('상대적 사이즈를 올바르게 반환해야 한다.', () => {
    const actualSize = relativeSizeConverter(targetSize);
    expect(actualSize).toBe(testCore(targetSize));
  });

  test('숫자 입력을 올바르게 처리해야 한다.', () => {
    const size = 100;
    expect(relativeSizeConverter(size)).toBeGreaterThan(0);
  });

  test('숫자가 아닌 입력에 대해 0을 반환해야 한다.', () => {
    const inputs = [null, undefined, 'a string', {}, []];
    inputs.forEach((input) => {
      expect(relativeSizeConverter(input as number)).toBe(0);
    });
  });

  test('반복되는 크기 계산에 캐시를 사용해야 한다.', () => {
    expect.assertions(3);
    const spy = jest.spyOn(Map.prototype, 'get');
    const firstCall = relativeSizeConverter(targetSize);
    const secondCall = relativeSizeConverter(targetSize);
    expect(spy).not.toHaveBeenCalledWith(1);
    expect(spy).toHaveBeenCalledWith(targetSize);
    expect(firstCall).toEqual(secondCall);
    spy.mockRestore();
  });

  test('잘못된 캐시 값을 조회할 경우 예외가 발생해야 한다.', () => {
    expect.assertions(2);
    const spy = jest.spyOn(Map.prototype, 'get').mockReturnValue(undefined);
    relativeSizeConverter(targetSize);
    expect(spy).not.toHaveBeenCalledWith(1);
    expect(() => {
      relativeSizeConverter(targetSize);
    }).toThrow(ReferenceError);
    spy.mockRestore();
  });
});

describe('applyRelativeSizes Function', () => {
  let relativeSizeConverter: (size: number) => number;

  beforeEach(() => {
    relativeSizeConverter = generateResponsiveStyle(
      currentDeviceWidth,
      referenceDeviceWidth,
      testCore,
    );
  });

  test('계산된 객체를 반환해야 한다.', () => {
    const sizeConverter = responsiveStyleAdapter(relativeSizeConverter);
    expect(
      sizeConverter({
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'purple',
      }),
    ).toStrictEqual({
      borderRadius: testCore(8),
      paddingHorizontal: testCore(16),
      paddingVertical: testCore(8),
      backgroundColor: 'purple',
    });
  });
});
