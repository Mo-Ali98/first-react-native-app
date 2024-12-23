import { ThemedText } from "@/components/ThemedText";
import Card from "@/components/ui/card";
import { SearchBar } from "@/components/ui/SearchBar";
import { Colors } from "@/constants/Colors";
import { Api, Item } from "@/services/api/apt";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch items
  const fetchItems = async () => {
    const api = new Api();
    setLoading(true);
    const data = await api.fetchItems();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Filter items based on search
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showSearchResults = searchQuery.length > 0;

  const dynamicStyles = {
    container: {
      backgroundColor: Colors[colorScheme ?? "light"].background,
    },
    recommendationItem: {
      backgroundColor: Colors[colorScheme ?? "light"].tint + "10",
    },
    overlay: {
      position: "absolute" as const,
      backgroundColor: Colors[colorScheme ?? "light"].text + "20",
      top: 60,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
    },
  };

  return (
    <SafeAreaView style={[styles.container, dynamicStyles.container]}>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <ScrollView style={[styles.content, { zIndex: 0 }]}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : showSearchResults ? (
          // Search Results
          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Search Results</ThemedText>
            <View style={styles.recommendationsContainer}>
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  href={{
                    pathname: "/details/[id]",
                    params: { id: item.id },
                  }}
                  asChild
                >
                  <Pressable>
                    <Card
                      title={item.title}
                      description={item.description}
                      imageUri={item.imageUri}
                    />
                  </Pressable>
                </Link>
              ))}
            </View>
          </View>
        ) : (
          // Default Sections
          <>
            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>
                Recommended for you
              </ThemedText>
              <View style={styles.recommendationsContainer}>
                {items.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    href={{
                      pathname: "/details/[id]",
                      params: { id: item.id },
                    }}
                    asChild
                  >
                    <Pressable>
                      <Card
                        title={item.title}
                        description={item.description}
                        imageUri={item.imageUri}
                      />
                    </Pressable>
                  </Link>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Popular</ThemedText>
              <View style={styles.recommendationsContainer}>
                {items.slice(3, 5).map((item) => (
                  <Link
                    key={item.id}
                    href={{
                      pathname: "/details/[id]",
                      params: { id: item.id },
                    }}
                    asChild
                  >
                    <Pressable>
                      <Card
                        title={item.title}
                        description={item.description}
                        imageUri={item.imageUri}
                      />
                    </Pressable>
                  </Link>
                ))}
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
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
});
