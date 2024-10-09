import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Api, Item } from "@/services/api/apt";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  const [item, setItem] = useState<Item | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const api = new Api();

    // Convert id to a number if it's a string
    const itemId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);

    if (!isNaN(itemId)) {
      api.fetchItemById(itemId).then((data) => {
        setItem(data);
        setLoading(false);
      });
    } else {
      setLoading(false); // Handle the case where id isn't valid
    }
  }, [id, item, loading]);

  if (loading) {
    return (
      <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1 }}>
        <ParallaxScrollView
          headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
          headerImage={<Image src={""} className="h-full w-full absolute" />}
        >
          <ActivityIndicator
            style={{
              margin: "auto",
            }}
            size="large"
          />
        </ParallaxScrollView>
      </SafeAreaView>
    );
  }

  if (!item) {
    return (
      <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1 }}>
        <ParallaxScrollView
          headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
          headerImage={<Image src={""} className="h-full w-full absolute" />}
        >
          <Text className="font-bold text-xl text-black dark:text-white m-auto">
            Not available
          </Text>
        </ParallaxScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <Image
            src={item.imageUri as string}
            className="h-full w-full absolute"
          />
        }
      >
        <ThemedView>
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-blue-600 text-xl font-semibold mb-5">
              Back
            </Text>
          </TouchableOpacity>

          <Text className="text-4xl font-bold text-black dark:text-white">
            {item.title}
          </Text>
          <Text className="my-3 text-black dark:text-white font-semibold">
            {item.description}
          </Text>

          <Text className="text-black dark:text-white ">
            {item.detailedDescription}
          </Text>
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}
