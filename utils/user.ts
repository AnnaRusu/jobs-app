import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUser = async (name: string) => {
  try {
    const username = await AsyncStorage.setItem("user", JSON.stringify(name));
    return username;
  } catch (error) {
    console.error("Error setting the username", error);
  }
};

export const getUser = async () => {
  try {
    const username = await AsyncStorage.getItem("user");
    return username != null ? JSON.parse(username) : "";
  } catch (error) {
    console.error("Error getting the username:", error);
    return [];
  }
};
