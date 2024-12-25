import { ThemedText } from "@/components/ThemedText";
import Card from "@/components/ui/card";
import { Colors } from "@/constants/Colors";
import { useItems } from "@/hooks/useItems";
import { todaysDate } from "@/utils/utils";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ScrollView,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colorScheme = useColorScheme();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const { items, isLoading, refetch } = useItems();

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ marginTop: 20 }}
      >
        <View className="px-4">
          <ThemedText
            style={{ marginBottom: 10 }}
            className="!text-gray-500 dark:!text-gray-400"
          >
            {todaysDate()}
          </ThemedText>
          <ThemedText type="title" style={{ marginBottom: 20 }}>
            Home
          </ThemedText>
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            items.map((item) => (
              <Link
                key={item.id}
                href={{
                  pathname: "/details/[id]",
                  params: { id: item.id },
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
