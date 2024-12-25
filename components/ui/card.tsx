import React from "react";

import { Image, useColorScheme, View } from "react-native";
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
      className={`flex gap-3 p-5 rounded-lg min-w-full mb-5 ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      }`}
    >
      <Image className="rounded-md h-40" src={imageUri} />
      <View>
        <ThemedText type="subtitle" className="text-black dark:text-white">
          {title}
        </ThemedText>
        <ThemedText type="paragraph" className="text-black dark:text-white">
          {description}
        </ThemedText>
      </View>
    </View>
  );
};

export default Card;
