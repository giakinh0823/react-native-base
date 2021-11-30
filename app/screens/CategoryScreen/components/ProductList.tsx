import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Skateboard from "../../../assets/images/Skateboard.png";
import Ski from "../../../assets/images/Ski.png";
import Snowboard from "../../../assets/images/Snowboard.png";
import Snowshoe from "../../../assets/images/Snowshoe.png";
import Surf from "../../../assets/images/Surf.png";
import Surfboard from "../../../assets/images/Surfboard.png";
import ProductItem from "./ProductItem";

const listProduct: any[] = [
  {
    id: 1,
    name: "Ván trượt truyết",
    image: Ski,
    price: "50",
    sale: "10%",
  },
  {
    id: 2,
    name: "Ván Snowboard 360",
    image: Snowboard,
    price: "15",
    sale: "40%",
  },
  {
    id: 3,
    name: "Giày Snowshoe",
    image: Snowshoe,
    price: "30",
    sale: "30%",
  },
  {
    id: 4,
    name: "Ván Skateboard Super",
    image: Skateboard,
    price: "49",
    sale: "20%",
  },
  { id: 5, name: "Ván Surf BT5", image: Surf, price: "4.100.000", sale: "10%" },
  {
    id: 6,
    name: "Cặp Ván Surfboard",
    image: Surfboard,
    price: "58",
    sale: "50%",
  },
];

interface Props {
  navigation: any;
}

const ProductList = ({ navigation }: Props) => {
  const [products, setProducts] = useState(listProduct);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <ProductItem
              product={item}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item.name,
                  product: item,
                });
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listProduct}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  listProduct: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  item: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
  }
});
