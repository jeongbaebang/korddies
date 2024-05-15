import { Cache } from './Cache';

describe('Cache', () => {
  let cache: Cache<number, number>;

  beforeEach(() => {
    cache = new Cache<number, number>();
  });

  test('값을 설정하고 가져올 수 있어야 한다.', () => {
    cache.set(1, 100);
    expect(cache.find(1)).toBe(100);
  });

  test('존재하지 않는 값을 가져올 때 오류를 발생시켜야 한다.', () => {
    expect(() => cache.find(2)).toThrow(ReferenceError);
  });

  test('키가 존재하는 경우 true를 반환해야 한다.', () => {
    cache.set(1, 100);
    expect(cache.has(1)).toBe(true);
  });

  test('키가 존재하지 않는 경우 false를 반환해야 한다.', () => {
    expect(cache.has(2)).toBe(false);
  });

  test('값이 없을 때 calculate 메서드가 값을 계산하고 저장해야 한다.', () => {
    const fn = jest.fn((key: number) => key * 2);
    const result = cache.calculate(3, fn);
    expect(result).toBe(6);
    expect(cache.find(3)).toBe(6);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('값이 이미 캐시에 있을 때 calculate 메서드가 재계산하지 않고 캐시된 값을 반환해야 한다.', () => {
    const fn = jest.fn((key: number) => key * 2);
    cache.set(4, 8);
    const result = cache.calculate(4, fn);
    expect(result).toBe(8);
    expect(fn).not.toHaveBeenCalled();
  });
});
