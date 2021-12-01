import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProductList from "./components/ProductList";

interface Props {
  navigation: any;
}

const CategoryScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductList navigation={navigation} />
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
