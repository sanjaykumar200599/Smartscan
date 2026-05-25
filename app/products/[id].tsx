import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";

import { useEffect, useState } from "react";

import { useLocalSearchParams } from "expo-router";

import { api } from "../../services/api";

import { saveHistory } from "../../storage/history";

import * as Notifications from "expo-notifications";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();

  const [loading, setLoading] = useState(true);

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);

      setProduct(response.data);

      await saveHistory({
        id: Date.now(),
        productId: response.data.id,
        title: response.data.title,
        time: new Date().toLocaleString(),
      });

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Product Scanned",
          body: `${response.data.title} added to history`,
        },
        trigger: null,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 bg-slate-900 justify-center items-center">
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-slate-900 p-5">
      <Image
        source={{ uri: product.thumbnail }}
        className="w-full h-72 rounded-3xl"
      />

      <Text className="text-white text-3xl font-bold mt-5">
        {product.title}
      </Text>

      <Text className="text-slate-400 mt-2 capitalize">
        {product.category}
      </Text>

      <Text className="text-indigo-400 text-2xl font-bold mt-5">
        ${product.price}
      </Text>

      <Text className="text-slate-300 leading-7 mt-6">
        {product.description}
      </Text>
    </ScrollView>
  );
}