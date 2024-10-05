import { ThemedText } from "@/components/ThemedText";
import Card from "@/components/ui/card";
import { Link } from "expo-router";
import React from "react";
import { Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
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
      >
        <Link
          href={{
            pathname: "/details/[id]",
            params: {
              id: "landscape",
              title: "Beautiful Landscape",
              image:
                "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          }}
          style={{ width: "100%", flex: 1, flexGrow: 1 }}
          asChild
        >
          <Pressable>
            <Card
              title="Beautiful Landscape"
              description="This is a description of the beautiful landscape."
              imageUri="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Pressable>
        </Link>

        <Link
          href={{
            pathname: "/details/[id]",
            params: {
              id: "mountain",
              title: "Majestic Mountain",
              image:
                "https://images.pexels.com/photos/20821607/pexels-photo-20821607/free-photo-of-snow-in-barren-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          }}
          style={{ width: "100%", flex: 1, flexGrow: 1 }}
          asChild
        >
          <Pressable>
            <Card
              title="Majestic Mountain"
              description="An awe-inspiring view of the mountains."
              imageUri="https://images.pexels.com/photos/20821607/pexels-photo-20821607/free-photo-of-snow-in-barren-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Pressable>
        </Link>

        <Link
          href={{
            pathname: "/details/[id]",
            params: {
              id: "city",
              title: "City Skyline",
              image:
                "https://images.pexels.com/photos/7613/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          }}
          style={{ width: "100%", flex: 1, flexGrow: 1 }}
          asChild
        >
          <Pressable>
            <Card
              title="City Skyline"
              description="The bustling life of a vibrant city."
              imageUri="https://images.pexels.com/photos/7613/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Pressable>
        </Link>

        <Link
          href={{
            pathname: "/details/[id]",
            params: {
              id: "forest",
              title: "Enchanting Forest",
              image:
                "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          }}
          style={{ width: "100%", flex: 1, flexGrow: 1 }}
          asChild
        >
          <Pressable>
            <Card
              title="Enchanting Forest"
              description="A serene view of a lush green forest."
              imageUri="https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
