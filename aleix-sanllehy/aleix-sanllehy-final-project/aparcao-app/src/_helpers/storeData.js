import AsyncStorage from "@react-native-community/async-storage";

export async function storeData(value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    throw e;
  }
}
