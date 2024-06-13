// calculateMaxChars.test.js

import { calculateMaxChars } from './calculateMaxChars';

// 테스트 케이스 설명: 기준 디바이스 너비가 393이고, 현재 디바이스 너비가 400일 때
test('기준 디바이스 너비 393, 현재 디바이스 너비 400일 때 최대 글자 수 계산', () => {
  const referenceDeviceWidth = 393;
  const currentDeviceWidth = 400;
  const expectedMaxChars = 21; // 400 / (393 / 21) = 21.37 -> floor() 사용 시 21

  const result = calculateMaxChars(referenceDeviceWidth, currentDeviceWidth, {
    baseCharCount: 21,
  });

  expect(result).toBe(expectedMaxChars);
});

// 테스트 케이스 설명: 기준 디바이스 너비가 393이고, 현재 디바이스 너비가 800일 때
test('기준 디바이스 너비 393, 현재 디바이스 너비 800일 때 최대 글자 수 계산', () => {
  const referenceDeviceWidth = 393;
  const currentDeviceWidth = 800;
  const expectedMaxChars = 42; // 800 / (393 / 21) = 42.74 -> floor() 사용 시 42

  const result = calculateMaxChars(referenceDeviceWidth, currentDeviceWidth, {
    baseCharCount: 21,
  });

  expect(result).toBe(expectedMaxChars);
});

// 테스트 케이스 설명: 기준 디바이스 너비가 393이고, 현재 디바이스 너비가 196.5일 때
test('기준 디바이스 너비 393, 현재 디바이스 너비 196.5일 때 최대 글자 수 계산', () => {
  const referenceDeviceWidth = 393;
  const currentDeviceWidth = 196.5;
  const expectedMaxChars = 10; // 196.5 / (393 / 21) = 10.68 -> floor() 사용 시 10

  const result = calculateMaxChars(referenceDeviceWidth, currentDeviceWidth, {
    baseCharCount: 21,
  });

  expect(result).toBe(expectedMaxChars);
});

// 테스트 케이스 설명: 기준 디바이스 너비와 현재 디바이스 너비가 동일할 때
test('기준 디바이스 너비와 현재 디바이스 너비가 동일할 때', () => {
  const referenceDeviceWidth = 393;
  const currentDeviceWidth = 393;
  const expectedMaxChars = 21; // 동일한 경우는 21

  const result = calculateMaxChars(referenceDeviceWidth, currentDeviceWidth, {
    baseCharCount: 21,
  });

  expect(result).toBe(expectedMaxChars);
});
