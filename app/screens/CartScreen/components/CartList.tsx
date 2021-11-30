import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectCartList, cartActions } from '../cartSlice';
import CartItem from "./CartItem";

interface Props {
  navigation: any;
}

const CartList = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector(selectCartList);

  const setQuantity = (productId: number, quantity: number) => {
    dispatch(cartActions.setQuantity({id: productId, quantity: quantity}));
  };

  const removeCart = (productId: number) => {
    dispatch(cartActions.removeCart(productId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartList}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <CartItem
              cart={item}
              onPress={() => {
                const product = { ...item, quantity: undefined };
                navigation.navigate("Product", {
                  name: item.name,
                  product: product,
                });
              }}
              setQuantity={setQuantity}
              removeCart={removeCart}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listProduct}
      />
    </View>
  );
};

export default CartList;

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
