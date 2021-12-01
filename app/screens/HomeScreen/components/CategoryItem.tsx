import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CategoryItemProps {
  category: any;
  onPress: () => void;
}

const CategoryItem = ({category, onPress }: CategoryItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.content}>
          <Text style={styles.text}>{category.name}</Text>
          <Image source={category.image} style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    marginBottom: 12,
  },
  content: {
    alignItems: "center",
    padding: 14,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 15,
  },
  image: {
    width: 60,
    height: 60,
  },
});
