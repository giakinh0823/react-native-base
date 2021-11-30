import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CategoryList from "./components/CategoryList";

interface Props {
  navigation: any;
}

const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CategoryList navigation={navigation}/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 20,
  },
});
