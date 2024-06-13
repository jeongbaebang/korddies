// 디바이스 너비에 기반하여 표시 가능한 글자 수 계산
const calculateMaxChars = (
  referenceDeviceWidth: number,
  currentDeviceWidth: number,
  options: {
    baseCharCount: number;
  },
) => {
  const BASE_CHAR_COUNT = options.baseCharCount;
  const charWidthRatio = referenceDeviceWidth / BASE_CHAR_COUNT;

  return Math.floor(currentDeviceWidth / charWidthRatio);
};

export { calculateMaxChars };
