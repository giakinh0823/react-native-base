import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Order } from '../../../models/Order';
import OrderItem from "./OrderItem";

interface Props {
  navigation: any;
  orderList: Order[];
}

const OrderList = ({ navigation, orderList }: Props) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={orderList}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <OrderItem
              order={item}
              navigation={navigation}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listProduct}
      />
    </View>
  );
};

export default OrderList;

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
