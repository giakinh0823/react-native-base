import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Cart } from "../../../models";
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  cart: Cart;
  onPress: any;
  setQuantity(id: number,quantity: number): void;
  removeCart(id: number): void;
}

const CartItem = ({ cart, onPress, setQuantity, removeCart }: Props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => onPress({ ...cart, quantity: undefined })}>
        <View style={styles.layout}>
          <TouchableOpacity style={styles.close} onPress={() => removeCart(cart.id)}>
            <MaterialCommunityIcons name="close" size={15}/>
          </TouchableOpacity>
          <Image source={cart.image} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.text}>{cart.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{cart.price}$</Text>
              <View style={styles.quantityConatiner}>
                <Text>Số lượng: </Text>
                <View style={styles.quantity}>
                  <TouchableOpacity onPress={() => setQuantity(cart.id, 1)}>
                    <Text style={styles.button}>+</Text>
                  </TouchableOpacity>
                  <Text style={styles.price}>{cart.quantity}</Text>
                  <TouchableOpacity onPress={() => setQuantity(cart.id, -1)}>
                    <Text style={styles.button}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CartItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
    marginBottom: 12,
    position: "relative",
  },
  layout: {
    padding: 14,
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
    width: 100,
    height: 100,
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
  }
});
