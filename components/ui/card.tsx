import React from "react";

import { Image, Text, View } from "react-native";

interface CardProps {
  title: string;
  description: string;
  imageUri: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUri }) => {
  return (
    <View className="flex gap-3 p-5 bg-white dark:bg-gray-800 rounded-lg min-w-full mb-5">
      <Image className="rounded-md h-40" src={imageUri} />
      <View>
        <Text className="font-bold text-2xl text-black dark:text-white">
          {title}
        </Text>
        <Text className="text-md text-black dark:text-white">
          {description}
        </Text>
      </View>
    </View>
  );
};

export default Card;
