import { useEffect, useState } from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import {
  getHistory,
  deleteHistory,
} from "../storage/history";

export default function HistoryScreen() {
  const [history, setHistory] = useState<any[]>([]);

  const loadHistory = async () => {
    const data = await getHistory();

    setHistory(data);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <View className="flex-1 bg-slate-900 px-5 pt-16">
      <Text className="text-white text-3xl font-bold mb-8">
        Scan History
      </Text>

      <FlatList
  data={history}
  keyExtractor={(item) => item.id.toString()}
  ListEmptyComponent={
    <View className="flex-1 justify-center items-center mt-32">
      <Text className="text-slate-400 text-lg">
        No scans yet
      </Text>
    </View>
  }
  renderItem={({ item }) => (
    <View className="bg-slate-800 rounded-3xl p-5 mb-4">
      <Text className="text-white text-xl font-bold">
        {item.title}
      </Text>

      <Text className="text-slate-400 mt-2">
        {item.time}
      </Text>

      <TouchableOpacity
        onPress={async () => {
          await deleteHistory(item.id);

          loadHistory();
        }}
        className="bg-red-500 mt-5 p-3 rounded-xl"
      >
        <Text className="text-center text-white">
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  )}
/>
    </View>
  );
}