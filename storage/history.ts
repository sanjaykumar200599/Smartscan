import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "SMARTSCAN_HISTORY";

export const getHistory = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);

    return [];
  }
};

export const saveHistory = async (item: any) => {
  try {
    const existing = await getHistory();

    const updated = [item, ...existing];

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteHistory = async (id: number) => {
  try {
    const history = await getHistory();

    const updated = history.filter(
      (item: any) => item.id !== id
    );

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );
  } catch (error) {
    console.log(error);
  }
};