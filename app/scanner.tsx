import { useEffect, useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  CameraView,
  useCameraPermissions,
} from "expo-camera";

import { router } from "expo-router";

export default function ScannerScreen() {
  const [permission, requestPermission] =
    useCameraPermissions();

  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

 const handleBarcodeScanned = ({ data }: any) => {
  if (scanned) return;

  setScanned(true);

  const productId = Number(data);

  if (!isNaN(productId)) {
    router.push({
      pathname: "/products/[id]",
      params: { id: String(productId) },
    });
  } else {
    alert("Invalid Product QR Code");
  }
};

  if (!permission?.granted) {
    return (
      <View className="flex-1 bg-black justify-center items-center">
        <Text className="text-white">
          Camera permission required
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black">
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "ean13", "ean8"],
        }}
        onBarcodeScanned={handleBarcodeScanned}
      />

      <View className="absolute inset-0 justify-center items-center">
        <View className="w-72 h-72 border-4 border-indigo-500 rounded-3xl" />
      </View>

      <View className="absolute bottom-16 w-full items-center">
        <TouchableOpacity
          onPress={() => setScanned(false)}
          className="bg-indigo-500 px-6 py-4 rounded-full"
        >
          <Text className="text-white font-bold">
            Tap To Scan Again
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
