/**
 * @see https://github.com/jeongbaebang/korddies/wiki/Docs#cache
 */
class Cache<K, V> {
  private cache: Map<K, V>;

  constructor() {
    this.cache = new Map();
  }

  find(key: K): V {
    const cachedValue = this.cache.get(key);

    if (cachedValue === undefined) {
      throw new ReferenceError('Invalid cachedValue');
    }

    return cachedValue;
  }

  set(key: K, value: V): void {
    this.cache.set(key, value);
  }

  has(key: K): boolean {
    return this.cache.has(key);
  }

  calculate(key: K, fn: (key: K) => V): V {
    if (this.has(key)) {
      return this.find(key);
    }

    const newValue = fn(key);

    this.set(key, newValue);

    return newValue;
  }
}

export { Cache };
