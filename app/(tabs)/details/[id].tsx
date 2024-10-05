import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {
  const { id, title, image } = useLocalSearchParams();

  return (
    <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={<Image src={image as string} style={styles.headerImage} />}
      >
        <ThemedView style={styles.titleContainer}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <ThemedText style={styles.backButtonText}>Back</ThemedText>
          </TouchableOpacity>

          <ThemedText type="subtitle">Details for {title}</ThemedText>

          <ThemedText>
            This is the detail page for {title} (ID: {id}).
          </ThemedText>
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
  headerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
