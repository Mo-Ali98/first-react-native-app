import { Colors } from "@/constants/Colors";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

const Header = ({ onBackPress }: { onBackPress: () => void }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
      <Text>← Back</Text>
    </TouchableOpacity>
  </View>
);

const WebViewScreen = () => {
  const { url } = useLocalSearchParams();
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (!url) {
      router.push("/news");
    }
  }, [url]);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors[colorScheme ?? "light"].background,
        }}
      >
        <Header onBackPress={() => router.push("/news")} />
        <WebView
          source={{
            uri:
              typeof url === "string" ? url : Array.isArray(url) ? url[0] : "",
            baseUrl: "",
            html: "",
          }}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingTop: 10,
  },
  backButton: {
    padding: 8,
  },
});

export default WebViewScreen;
