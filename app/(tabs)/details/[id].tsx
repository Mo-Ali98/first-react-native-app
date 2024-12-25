import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useItems } from "@/hooks/useItems";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {
  const colorScheme = useColorScheme();
  const { id } = useLocalSearchParams();
  const itemId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);

  const { item, isLoading } = useItems(itemId);

  if (isLoading) {
    return (
      <SafeAreaView
        edges={["right", "left", "top"]}
        style={{
          flex: 1,
          backgroundColor: Colors[colorScheme ?? "light"].background,
        }}
      >
        <ParallaxScrollView
          headerBackgroundColor={{
            light: Colors[colorScheme ?? "light"].background,
            dark: Colors[colorScheme ?? "light"].background,
          }}
          headerImage={
            <Image src={""} className="h-full w-full absolute center-content" />
          }
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
      <SafeAreaView
        edges={["right", "left", "top"]}
        style={{
          flex: 1,
          backgroundColor: Colors[colorScheme ?? "light"].background,
        }}
      >
        <ParallaxScrollView
          headerBackgroundColor={{
            light: Colors[colorScheme ?? "light"].background,
            dark: Colors[colorScheme ?? "light"].background,
          }}
          headerImage={
            <Image src={""} className="h-full w-full absolute center-content" />
          }
        >
          <Text className="font-bold text-xl text-black dark:text-white m-auto">
            Not available
          </Text>
        </ParallaxScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      edges={["right", "left", "top"]}
      style={{
        flex: 1,
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
    >
      <ParallaxScrollView
        headerBackgroundColor={{
          light: Colors[colorScheme ?? "light"].background,
          dark: Colors[colorScheme ?? "light"].background,
        }}
        headerImage={
          <Image
            src={item.imageUri as string}
            className="h-full w-full absolute"
          />
        }
      >
        <ThemedView>
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center mb-5"
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={Colors[colorScheme ?? "light"].tint}
            />
            <ThemedText
              type="link"
              className="text-[17px] font-semibold ml-1"
              style={{ color: Colors[colorScheme ?? "light"].tint }}
            >
              Back
            </ThemedText>
          </TouchableOpacity>

          <ThemedText
            type="subtitle"
            className="text-black dark:text-white mb-5"
          >
            {item.title}
          </ThemedText>
          <ThemedText type="paragraph" className="text-black dark:text-white">
            {item.description}
          </ThemedText>

          <ThemedText type="paragraph" className="text-black dark:text-white ">
            {item.detailedDescription}
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}
