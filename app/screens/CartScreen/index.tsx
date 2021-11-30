import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../app/hooks";
import { selectCartTotal } from "./cartSlice";
import CartList from "./components/CartList";
import Checkout from "./components/Checkout";

interface Props {
  navigation: any;
}

const CartScreen = ({ navigation }: Props) => {
  const [total, setTotal] = React.useState(0);
  const totalPrice = useAppSelector(selectCartTotal);
  useEffect(() => {
    setTotal(totalPrice);
  }, [totalPrice]);

  return (
    <SafeAreaView style={styles.container}>
      {total != 0 && (
        <>
          <CartList navigation={navigation} />
          <View>
            <Checkout totalPrice={total} />
          </View>
        </>
      )}
      {total == 0 && (
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
  }
});
