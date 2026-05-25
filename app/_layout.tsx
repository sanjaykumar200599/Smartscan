import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";

import * as Notifications from "expo-notifications";

import "../global.css";

export default function RootLayout() {
  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  return (
    <View className="flex-1 bg-slate-900">
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,

          animation: "fade",

          contentStyle: {
            backgroundColor: "#0f172a",
          },

        }}
      />
    </View>
  );
}