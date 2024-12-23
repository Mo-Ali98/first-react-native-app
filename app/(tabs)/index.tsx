import Card from "@/components/ui/card";
import { Colors } from "@/constants/Colors";
import { Api, Item } from "@/services/api/apt";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colorScheme = useColorScheme();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchItems = async () => {
    const api = new Api();
    setLoading(true);
    const data = await api.fetchItems();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchItems();
    setRefreshing(false);
  };

  return (
    <SafeAreaView
      edges={["right", "left", "top"]}
      style={{
        flex: 1,
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
    >
      <Text className="font-bold text-6xl text-black dark:text-white px-4">
        Home
      </Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        className="p-4"
      >
        {loading ? (
          <ActivityIndicator
            style={{
              margin: "auto",
            }}
            size="large"
          />
        ) : (
          items.map((item) => (
            <Link
              key={item.id}
              href={{
                pathname: "/details/[id]",
                params: {
                  id: item.id,
                },
              }}
              asChild
            >
              <Pressable>
                <Card
                  title={item.title}
                  description={item.description}
                  imageUri={item.imageUri}
                />
              </Pressable>
            </Link>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
