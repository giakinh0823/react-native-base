import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Order } from "../../models";
import { Cart } from "../../models/Cart";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface OrderState {
  loading: boolean;
  list: Order[];
  total: number;
  quantity: number;
}

const initialState: OrderState = {
  loading: false,
  list: [],
  total: 0,
  quantity: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    fetchOrderList(state) {
      state.loading = true;
    },
    fetchOrderSuccess(state, action: PayloadAction<Order[]>) {
      state.list = action.payload;
      state.loading = false;
    },
    fetchOrderFailed(state) {
      state.loading = false;
    },
    addOrder(state, action: PayloadAction<Cart[]>) {
      state.loading = true;
    },
    addOrderSuccess(state, action: PayloadAction<Cart[]>) {
      const order: Order = {
        id: state.list.length + 1,
        date: new Date().toLocaleString(),
        orderItems: action.payload,
        total: action.payload.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        quantity: action.payload.reduce(
          (quantity, item) => quantity + item.quantity,
          0
        ),
      };
      state.list.push(order);
      ;(async () => {
        try {
          await AsyncStorage.setItem("@orders", JSON.stringify(state.list));
        } catch (error) {
          console.log(error);
        }
      })();
      state.loading = false;
    },
    addOrderFail(state) {
      state.loading = false;
    },
    getTotalPrice(state) {
      const totalPrice = state.list.reduce(
        (total, item) => total + item.total,
        0
      );
      state.total = totalPrice;
    },
    getQuantity(state) {
      const quantity = state.list.reduce(
        (quantity, item) => quantity + item.quantity,
        0
      );
      state.quantity = quantity;
    },
  },
});

//Actions
export const orderActions = orderSlice.actions;
//selectors
export const selectOrderList = (state: RootState) => state.order.list;
export const selectOrderLoading = (state: RootState) => state.order.loading;
export const selectOrderTotal = (state: RootState) => state.order.total;
export const selectOrderQuantity = (state: RootState) => state.order.quantity;
//reducer
const orderReducer = orderSlice.reducer;
export default orderReducer;
