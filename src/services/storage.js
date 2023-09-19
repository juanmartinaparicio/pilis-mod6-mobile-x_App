import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  _formatKey(key) {
    return `@${key}`;
  }
  async _getValue(key) {
    try {
      const v = await AsyncStorage.getItem(key);
      return v == null ? null : JSON.parse(v);
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  constructor(key) {
    this._key = this._formatKey(key);
  }

  getKey() {
    return this._key;
  }
  async setKey(key) {
    const newKey = this._formatKey(key);
    if (newKey === this._key) return;

    const value = await this._getValue(this._key);

    if (!value) {
      this._key = newKey;
      return;
    }

    try {
      await AsyncStorage.removeItem(this._key);
      await AsyncStorage.setItem(newKey, value);

      this._key = newKey;
    } catch (error) {
      console.log(error);
    }
  }

  async getValue() {
    return await this._getValue(this._key);
  }
  async setValue(x) {
    const value = JSON.stringify(x);

    try {
      AsyncStorage.setItem(this._key, value);
    } catch (error) {
      console.log(error);
    }
  }

  async clean() {
    try {
      await AsyncStorage.removeItem(this._key);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Storage;
