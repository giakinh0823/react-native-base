import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch } from "../../app/hooks";
import { cartActions } from "../CartScreen/cartSlice";

interface Props {
  navigation: any;
  route: any;
}

const ProductScreen = ({ route, navigation }: Props) => {
  const { product } = route.params;
  const dispatch = useAppDispatch();

  const addCart = () => {
    const cart = {
      ...product,
      quantity: 1,
    };
    dispatch(cartActions.addCart(cart));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.image} source={product.image} />
          <Text style={styles.price}>{product.price}$</Text>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eum,
            incidunt labore hic ullam at, tempora adipisci ut aspernatur
            consequuntur voluptates voluptatem error voluptate, accusantium eos
            reiciendis minima et ea.
          </Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eum,
            incidunt labore hic ullam at, tempora adipisci ut aspernatur
            consequuntur voluptates voluptatem error voluptate, accusantium eos
            reiciendis minima et ea.
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.6} onPress={addCart} style={styles.button}>
          <Text style={styles.buttonText}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 25,
    marginTop: 5,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 5,
    textAlign: "center",
  },
  price: {
    marginTop: 20,
    fontSize: 35,
  },
  button: {
    marginTop: 20,
    width: "100%",
    height: 50,
    backgroundColor: "#ff5a60",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
