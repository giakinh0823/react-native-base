import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Category } from "../../../models";
import { categoryActions, selectCategoryList } from "../categorySlice";
import ProductItem from "./ProductItem";
import { cartActions } from "../../CartScreen/cartSlice";
interface Props {
  navigation: any;
}

const ProductList = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectCategoryList);

  useEffect(() => {
    dispatch(categoryActions.fetchCategoryList());
  }, []);

  const addCart = (product: Category) => {
    const cart = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      sale: product.sale,
      quantity: 1,
    };
    dispatch(cartActions.addCart(cart));
  };

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
              addCart={addCart}
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
    paddingTop: 20,
  },
  item: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
