import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { orderActions } from "../OrderScreen/OrderSlice";
import { cartActions, selectCartList, selectCartTotal } from "./cartSlice";
import CartList from "./components/CartList";
import Checkout from "./components/Checkout";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation: any;
}

const CartScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(selectCartTotal);
  const cartList = useAppSelector(selectCartList);

  useEffect(() => {
    dispatch(cartActions.fetchCartList());
  }, [dispatch]);

  const checkout = React.useCallback(() => {
    dispatch(orderActions.addOrder(cartList));
    dispatch(cartActions.removeAllCart());
  }, [cartList]);

  return (
    <SafeAreaView style={styles.container}>
      {totalPrice != 0 && (
        <>
          <CartList navigation={navigation} cartList={cartList} />
          <View>
            <Checkout totalPrice={totalPrice} checkout={checkout} />
          </View>
        </>
      )}
      {totalPrice == 0 && (
        <View>
          <Text style={styles.label}>Giỏ hàng rỗng!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  label: {
    textAlign: "center",
  },
});
