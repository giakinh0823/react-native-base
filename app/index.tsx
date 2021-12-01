import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryScreen from "./screens/CategoryScreen";
import ProductScreen from "./screens/ProductScreen";
import OrderScreen from "./screens/OrderScreen";
import SettingScreen from "./screens/SettingScreen";
import CartScreen from "./screens/CartScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppSelector } from './app/hooks';
import { selectCartQuantity } from "./screens/CartScreen/cartSlice";

interface Props {}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

const NavHome = () => {
  return (
    <>
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />
        <HomeStack.Screen
          name="Category"
          component={CategoryScreen}
          options={({ route }: any) => ({ title: route.params.name })}
        />
        <HomeStack.Screen
          name="Product"
          component={ProductScreen}
          options={({ route }: any) => ({ title: route.params.name })}
        />
      </HomeStack.Navigator>
    </>
  );
};

const NavCart = () => {
  return (
    <>
      <CartStack.Navigator initialRouteName="Home">
        <CartStack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Cart" }}
        />
      </CartStack.Navigator>
    </>
  );
};

const NavOrder = () => {
  return (
    <>
      <OrderStack.Navigator initialRouteName="Home">
        <OrderStack.Screen
          name="Home"
          component={OrderScreen}
          options={{ title: "Order" }}
        />
      </OrderStack.Navigator>
    </>
  );
};

const NavSetting = () => {
  return (
    <>
      <SettingStack.Navigator initialRouteName="Home">
        <HomeStack.Screen
          name="Setting"
          component={SettingScreen}
          options={{ title: "Setting" }}
        />
      </SettingStack.Navigator>
    </>
  );
};

export const App = (props: Props) => {

  const cartQuantity = useAppSelector(selectCartQuantity);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeTab"
          component={NavHome}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="CartTab"
          component={NavCart}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
            tabBarBadge: cartQuantity > 0 ? cartQuantity : undefined,
          }}
        />
        <Tab.Screen
          name="OrderTab"
          component={NavOrder}
          options={{
            tabBarLabel: "Order",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="shopping" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingTab"
          component={NavSetting}
          options={{
            tabBarLabel: "Setting",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
