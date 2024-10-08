import { ThemedText } from "@/components/ThemedText";
import Card from "@/components/ui/card";
import { Api, Item } from "@/services/api/apt";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
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
    <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1 }}>
      <ThemedText
        type="title"
        style={{
          padding: 16,
          paddingHorizontal: 16,
        }}
      >
        Home
      </ThemedText>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          margin: 0,
          flexGrow: 1,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
              style={{ width: "100%", flex: 1, flexGrow: 1 }}
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
