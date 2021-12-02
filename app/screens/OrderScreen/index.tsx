import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import OrderList from "./components/OrderList";
import { selectOrderTotal, selectOrderList, orderActions } from './OrderSlice';

interface Props {
  navigation: any;
}

const OrderScreen = ({ navigation }: Props) => {
  const totalPrice = useAppSelector(selectOrderTotal);
  const orderList = useAppSelector(selectOrderList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(orderActions.fetchOrderList());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      {totalPrice != 0 && (
        <>
          <OrderList navigation={navigation} orderList={orderList}/>
        </>
      )}
      {totalPrice == 0 && (
        <View>
          <Text style={styles.label}>Chưa có sản phẩm được mua!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  label: {
      textAlign: "center",
  }
});
