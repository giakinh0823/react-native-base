import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Order } from "../../../models";

interface Props {
  order: Order;
  navigation: any;
}

const OrderItem = ({ order, navigation }: Props) => {
  const [listProduct, setListProduct] = useState(order?.orderItems);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setListProduct(order?.orderItems);
  }, [order]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text>Thời gian: {order?.date}</Text>
          <Text>Tổng: {order?.total}$</Text>
          <Text>Số lượng: {order?.quantity}</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => setShow(!show)}>
            <Text style={styles.laebl}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.list, { display: !show ? "none" : undefined }]}>
        {listProduct &&
          listProduct.map((item, index) => (
            <View key={index} style={styles.item}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  const product = { ...item, quantity: undefined };
                  navigation.navigate("Product", {
                    name: item.name,
                    product: product,
                  });
                }}
              >
                <View style={styles.layout}>
                  <Image source={item.image} style={styles.image} />
                  <View style={styles.content}>
                    <Text style={styles.text}>{item.name}</Text>
                    <View style={styles.priceContainer}>
                      <Text style={styles.price}>{item.price}$</Text>
                      <View style={styles.quantityConatiner}>
                        <Text>Số lượng: </Text>
                        <View style={styles.quantity}>
                          <Text style={styles.price}>{item.quantity}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </View>
  );
};

export default React.memo(OrderItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    marginBottom: 8,
    position: "relative",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  headerLeft: {},
  headerRight: {},
  laebl: {
    color: "#1473e6",
  },
  list: {
    paddingLeft: 20,
    marginTop: 10,
  },
  item: {
    backgroundColor: "#fff",
    marginBottom: 6,
    position: "relative",
  },
  date: {
    fontSize: 16,
  },
  layout: {
    padding: 4,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 14,
    textAlign: "left",
    fontWeight: "600",
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
  },
  priceContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
  },
  button: {
    padding: 6,
    borderRadius: 3,
    backgroundColor: "#ff5a60",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    minWidth: 20,
    textAlign: "center",
  },
  quantityConatiner: {
    alignItems: "center",
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
