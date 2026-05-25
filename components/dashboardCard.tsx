import { TouchableOpacity, Text, View } from "react-native";

interface Props {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}

export default function DashboardCard({
  title,
  icon,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-slate-800 rounded-3xl p-6 mb-5"
      activeOpacity={0.8}
    >
      <View className="mb-4">{icon}</View>

      <Text className="text-white text-xl font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}