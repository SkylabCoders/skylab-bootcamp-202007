import AsyncStorage from "@react-native-community/async-storage";

export async function getData() {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw e;
  }
}
