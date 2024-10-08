import React from "react";

import { Image, StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "../ThemedText";

interface CardProps {
  title: string;
  description: string;
  imageUri: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUri }) => {
  const theme = useColorScheme() ?? "light";

  return (
    <View
      style={[
        styles.card,
        theme === "dark" ? styles.cardDark : styles.cardLight,
      ]}
    >
      <Image className="rounded-md h-40" src={imageUri} />
      <View>
        <ThemedText
          style={[
            styles.title,
            theme === "dark" ? styles.titleDark : styles.titleLight,
          ]}
        >
          {title}
        </ThemedText>
        <ThemedText
          style={[
            styles.description,
            theme === "dark" ? styles.descriptionDark : styles.descriptionLight,
          ]}
        >
          {description}
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    padding: 18,
    minWidth: "100%",
    display: "flex",
    gap: 12,
  },
  cardLight: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardDark: {
    backgroundColor: "#333",
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  titleLight: {
    color: "#000",
  },
  titleDark: {
    color: "#fff",
  },
  description: {
    fontSize: 14,
  },
  descriptionLight: {
    color: "#666",
  },
  descriptionDark: {
    color: "#ccc",
  },
});

export default Card;
