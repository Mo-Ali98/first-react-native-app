import { ThemedText } from "@/components/ThemedText";
import Card from "@/components/ui/card";
import { SearchBar } from "@/components/ui/SearchBar";
import { Colors } from "@/constants/Colors";
import { useItems } from "@/hooks/useItems";
import { Item } from "@/services/api/items";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  const { items, isLoading } = useItems();
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const filterItems = (query: string) => {
    const results = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(results);
    setIsSearchActive(query.length > 0);
  };

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    filterItems(text);
  };

  return (
    <SafeAreaView
      edges={["right", "left", "top"]}
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme ?? "light"].background },
      ]}
    >
      <SearchBar
        value={searchQuery}
        onChangeText={handleSearchChange}
        onSubmit={() => filterItems(searchQuery)}
        style={{ marginTop: 20 }}
      />
      <ScrollView style={[styles.content, { zIndex: 0 }]}>
        {isLoading
          ? renderLoading()
          : isSearchActive
          ? renderSearchResults(filteredItems)
          : renderDefaultSections(items)}
      </ScrollView>
    </SafeAreaView>
  );
}

function renderLoading() {
  return <ActivityIndicator size="large" />;
}

function renderSearchResults(items: Item[]) {
  if (items.length === 0) {
    return (
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Search Results</ThemedText>
        <View style={[styles.recommendationsContainer, styles.noResults]}>
          <ThemedText>No items found</ThemedText>
        </View>
      </View>
    );
  }

  return (
    <Section title="Search Results">
      <ItemList items={items} />
    </Section>
  );
}

function renderDefaultSections(items: Item[]) {
  return (
    <>
      <Section title="Recommended for you">
        <ItemList items={items.slice(0, 3)} />
      </Section>
      <Section title="Popular">
        <ItemList items={items.slice(3, 5)} />
      </Section>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <ThemedText style={styles.sectionTitle}>{title}</ThemedText>
      <View style={styles.recommendationsContainer}>{children}</View>
    </View>
  );
}

function ItemList({ items }: { items: Item[] }) {
  return (
    <>
      {items.map((item) => (
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
    </>
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
  noResults: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
