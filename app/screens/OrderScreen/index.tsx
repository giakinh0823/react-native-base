import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../app/hooks";
import OrderList from "./components/OrderList";
import { selectOrderTotal, selectOrderList } from './OrderSlice';

interface Props {
  navigation: any;
}

const OrderScreen = ({ navigation }: Props) => {
  const [total, setTotal] = React.useState(0);
  const totalPrice = useAppSelector(selectOrderTotal);
  const orderList = useAppSelector(selectOrderList);
  const [listOrder, setListOrder] = React.useState(orderList);

  useEffect(() => {
    setListOrder(orderList);
  },[orderList])

  useEffect(() => {
    setTotal(totalPrice);
  }, [totalPrice]);

  return (
    <SafeAreaView style={styles.container}>
      {total != 0 && (
        <>
          <OrderList navigation={navigation} orderList={listOrder}/>
        </>
      )}
      {total == 0 && (
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
