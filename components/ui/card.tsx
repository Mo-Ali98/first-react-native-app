import React from "react";

import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";

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
      <Image src={imageUri} style={styles.image} />
      <Text
        style={[
          styles.title,
          theme === "dark" ? styles.titleDark : styles.titleLight,
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.description,
          theme === "dark" ? styles.descriptionDark : styles.descriptionLight,
        ]}
      >
        {description}
      </Text>
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
    padding: 8,
  },
  titleLight: {
    color: "#000",
  },
  titleDark: {
    color: "#fff",
  },
  description: {
    fontSize: 14,
    paddingHorizontal: 8,
  },
  descriptionLight: {
    color: "#666",
  },
  descriptionDark: {
    color: "#ccc",
  },
});

export default Card;
