import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    totalPrice: number;
    checkout: () => void;
}

const Checkout = ({totalPrice, checkout}: Props) => {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Tổng</Text>
        <Text style={styles.price}>{totalPrice}$</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => checkout()}>
        <View style={styles.button}>
          <Text style={styles.checkout}>Đặt hàng</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    opacity: 0.5,
  },
  price: {
    fontSize: 30,
  },
  button: {
    backgroundColor: "#2CB9B0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  checkout: {
    fontSize: 18,
    color: "white",
  },
});
