import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Api, Item } from "@/services/api/apt";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
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
          headerImage={<Image src={""} style={styles.headerImage} />}
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
          headerImage={<Image src={""} style={styles.headerImage} />}
        >
          <ThemedText
            style={{
              margin: "auto",
            }}
          >
            Not available
          </ThemedText>
        </ParallaxScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <Image src={item.imageUri as string} style={styles.headerImage} />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <ThemedText
              lightColor={styles.backButtonText.color}
              darkColor={styles.darkBackBtn.color}
            >
              Back
            </ThemedText>
          </TouchableOpacity>

          <ThemedText type="subtitle">{item.title}</ThemedText>
          <ThemedText className="py-3" type="defaultSemiBold">
            {item.description}
          </ThemedText>

          <ThemedText>{item.detailedDescription}</ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    gap: 8,
  },
  header: {
    flexDirection: "column",
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 18,
    color: "blue",
  },
  darkBackBtn: {
    fontSize: 18,
    color: "#DD6031",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
