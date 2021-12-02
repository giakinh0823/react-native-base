import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import CategoryItem from "./CategoryItem";
import Ski from "../../../assets/images/Ski.png";
import Snowboard from "../../../assets/images/Snowboard.png";
import Snowshoe from "../../../assets/images/Snowshoe.png";
import Skateboard from "../../../assets/images/Skateboard.png";
import Surf from "../../../assets/images/Surf.png";
import Surfboard from "../../../assets/images/Surfboard.png";
import { Category } from "../../../models/Category";

const listCategory: any[] = [
  { id: 1, name: "Ski", image: Ski },
  { id: 2, name: "Snowboard", image: Snowboard },
  { id: 3, name: "Snowshoe", image: Snowshoe },
  { id: 4, name: "Skateboard", image: Skateboard },
  { id: 5, name: "Surf", image: Surf },
  { id: 6, name: "Surfboard", image: Surfboard },
];

interface Props {
  navigation: any;
}

const CategoryList = ({ navigation }: Props) => {
  const [categories, setCategories] = useState(listCategory);

  const handleOnpress = React.useCallback((category: Category) => {
    navigation.navigate("Category", { name: category.name, category: category });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item} onPress={handleOnpress} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listCategory}
      />
    </View>
  );
};

export default React.memo(CategoryList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  listCategory: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
});
