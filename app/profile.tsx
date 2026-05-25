import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-slate-900 px-5 pt-16">
      <View className="bg-slate-800 rounded-3xl p-6">
        <Text className="text-white text-3xl font-bold">
          SmartScan
        </Text>

        <Text className="text-slate-300 leading-7 mt-5">
          SmartScan is a modern QR & Barcode scanner
          application built using Expo React Native,
          TypeScript and NativeWind.
        </Text>

        <Text className="text-indigo-400 mt-6 text-lg">
          Version 1.0.0
        </Text>
      </View>
    </View>
  );
}