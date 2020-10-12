import { ToastAndroid } from "react-native";

export function toast(message) {
  return ToastAndroid.show(message, ToastAndroid.SHORT);
}
