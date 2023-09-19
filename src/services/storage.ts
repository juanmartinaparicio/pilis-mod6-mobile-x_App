import AsyncStorage from "@react-native-async-storage/async-storage";

type Value<T> = Promise<T | null>;

class Storage<T> {
  private _key: string;
  _formatKey(key: string) {
    return `@${key}`;
  }
  async _getValue(key: string): Value<T> {
    try {
      const v = await AsyncStorage.getItem(key);
      return v == null ? null : (JSON.parse(v) as T);
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  constructor(key: string) {
    this._key = this._formatKey(key);
  }

  getKey(): string {
    return this._key;
  }
  async setKey(key: string): Promise<void> {
    const newKey = this._formatKey(key);
    if (newKey === this._key) return;

    const value = await this._getValue(this._key);

    if (!value) {
      this._key = newKey;
      return;
    }

    try {
      const valueToString = JSON.stringify(value);
      await AsyncStorage.removeItem(this._key);
      await AsyncStorage.setItem(newKey, valueToString);

      this._key = newKey;
    } catch (error) {
      console.log(error);
    }
  }

  async getValue(): Value<T> {
    return await this._getValue(this._key);
  }
  async setValue(x: T): Promise<void> {
    const value = JSON.stringify(x);

    try {
      AsyncStorage.setItem(this._key, value);
    } catch (error) {
      console.log(error);
    }
  }

  async clean(): Promise<void> {
    try {
      await AsyncStorage.removeItem(this._key);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Storage;
