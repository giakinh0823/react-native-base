import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Category } from "../../../models/Category";

interface ProductItemProps {
  product: Category;
  onPress: () => void;
  addCart: any;
}

const ProductItem = ({ product, onPress, addCart }: ProductItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.content}>
          <Image source={product.image} style={styles.image} />
          <Text style={styles.text}>{product.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price}$</Text>
            <TouchableOpacity style={styles.button} onPress={() => addCart(product)}>
              <Text style={styles.buttonColor}>MUA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

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
  },
  content: {
    padding: 14,
  },
  text: {
    fontSize: 14,
    textAlign: "left",
    fontWeight: "600",
    marginBottom: 12,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 15,
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
  },
  buttonColor: {
    color: "white",
  }
});
