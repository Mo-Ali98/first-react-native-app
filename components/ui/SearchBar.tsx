import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  useColorScheme,
  ViewStyle,
} from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function SearchBar({
  value,
  onChangeText,
  onSubmit,
  style,
}: SearchBarProps) {
  const colorScheme = useColorScheme();
  const searchAnimation = useRef(new Animated.Value(1)).current;
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const onSearchFocus = () => {
    setIsSearchFocused(true);
    Animated.spring(searchAnimation, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const onSearchBlur = () => {
    setIsSearchFocused(false);
    Animated.spring(searchAnimation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleClear = () => {
    onChangeText("");
  };

  const dynamicStyles = {
    searchContainer: {
      backgroundColor:
        Colors[colorScheme ?? "light"].tint + (isSearchFocused ? "25" : "15"),
      shadowColor: Colors[colorScheme ?? "light"].text,
      shadowOpacity: isSearchFocused
        ? colorScheme === "dark"
          ? 0.4
          : 0.2
        : colorScheme === "dark"
        ? 0.3
        : 0.1,
      elevation: isSearchFocused ? 5 : 3,
      borderColor: Colors[colorScheme ?? "light"].text,
      borderWidth: 1,
    },
    searchInput: {
      color: Colors[colorScheme ?? "light"].text,
    },
  };

  return (
    <Animated.View
      style={[
        styles.searchContainer,
        dynamicStyles.searchContainer,
        { transform: [{ scale: searchAnimation }], zIndex: 2 },
        style,
      ]}
    >
      <Ionicons
        name="search"
        size={20}
        color={Colors[colorScheme ?? "light"].text}
      />
      <TextInput
        style={[styles.searchInput, dynamicStyles.searchInput]}
        placeholder="Search..."
        placeholderTextColor={Colors[colorScheme ?? "light"].text}
        onFocus={onSearchFocus}
        onBlur={onSearchBlur}
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
      />
      {value.length > 0 && (
        <Pressable onPress={handleClear}>
          <Ionicons
            name="close-circle"
            size={20}
            color={Colors[colorScheme ?? "light"].text}
          />
        </Pressable>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});
