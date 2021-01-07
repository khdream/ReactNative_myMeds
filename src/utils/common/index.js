import { AsyncStorage } from 'react-native';

const _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(
        key,
        JSON.stringify(value) 
      );
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
};

const _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value);
    } catch (error) {
        console.log(error)
        return null;
    }
};

const _removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
    return false;
  }
}

const getNameTitle = (name) => {
  let names = name.split(' ');
  return names[0].charAt(0) + (names.length > 1 ? names[1].charAt(0) : '')
}

export default {
    _storeData, 
    _retrieveData, 
    _removeData,
    getNameTitle
}; 
