import { ScrollView, Text } from "react-native";
import { router } from "expo-router";
import DashboardCard from "../components/dashboardCard";

import {
  QrCode,
  History,
  User,
} from "lucide-react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#0f172a", "#1e293b"]}
      className="flex-1"
    >
      <ScrollView className="flex-1 px-5 pt-16">
        <Text className="text-white text-4xl font-bold">
          SmartScan
        </Text>

        <Text className="text-slate-300 mt-2 mb-10">
          Smart QR & Barcode Scanner
        </Text>

        <DashboardCard
          title="Scan QR / Barcode"
          icon={<QrCode color="white" size={34} />}
          onPress={() => router.navigate("/scanner")}
        />

        <DashboardCard
          title="Scan History"
          icon={<History color="white" size={34} />}
          onPress={() => router.navigate("/history")}
        />

        <DashboardCard
          title="Profile"
          icon={<User color="white" size={34} />}
          onPress={() => router.navigate("/profile")}
        />
      </ScrollView>
    </LinearGradient>
  );
}
