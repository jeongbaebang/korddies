const ERROR_MESSAGE =
  'Invalid cache key: The requested key is not present in the cache.';

interface Cache<K, V> {
  find(key: K): V;
  set(key: K, value: V): void;
  has(key: K): boolean;
  calculate(key: K, fn: (key: K) => V): V;
}

/**
 * @see https://github.com/jeongbaebang/korddies/wiki/Docs#cache
 */
class Cache<K, V> implements Cache<K, V> {
  private cache: Map<K, V>;

  constructor() {
    this.cache = new Map();
  }

  find(key: K) {
    const cachedValue = this.cache.get(key);

    if (cachedValue === undefined) {
      throw new ReferenceError(ERROR_MESSAGE);
    }

    return cachedValue;
  }

  set(key: K, value: V) {
    this.cache.set(key, value);
  }

  has(key: K) {
    return this.cache.has(key);
  }

  calculate(key: K, fn: (key: K) => V) {
    if (this.has(key)) {
      return this.find(key);
    }

    const newValue = fn(key);

    this.set(key, newValue);

    return newValue;
  }
}

export { Cache };
