import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Edit app/tabs/explore.tsx to edit this screen.</ThemedText>
    </View>
  );
}
