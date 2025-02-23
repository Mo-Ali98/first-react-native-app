import Card from "@/components/ui/card";
import { Colors } from "@/constants/Colors";
import { useNews } from "@/hooks/useNews";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewsFeedScreen() {
  const colorScheme = useColorScheme();
  const { loading, news, refetch } = useNews();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView
      edges={["right", "left", "top"]}
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme ?? "light"].background },
      ]}
    >
      <ScrollView
        style={[styles.content, { zIndex: 0 }]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {loading ? (
          renderLoading()
        ) : (
          <View style={styles.section}>
            {news.map((item) => {
              return (
                <Link
                  key={item.link}
                  href={{
                    pathname: "/webview",
                    params: { url: item.link },
                  }}
                  asChild
                >
                  <Pressable>
                    <Card
                      title={item.title}
                      description={item.description}
                      imageUri={item.thumbnail ?? ""}
                    />
                  </Pressable>
                </Link>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function renderLoading() {
  return <ActivityIndicator size="large" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recommendationsContainer: {
    gap: 10,
  },
  recommendationItem: {
    padding: 16,
    borderRadius: 8,
  },
  noResults: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
