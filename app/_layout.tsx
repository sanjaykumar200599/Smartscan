import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import * as Notifications from "expo-notifications";

import "../global.css";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function RootLayout() {
  useEffect(() => {
    const requestPermissions = async () => {
      const { status } =
        await Notifications.requestPermissionsAsync();

      console.log("Notification Permission:", status);
    };

    requestPermissions();
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