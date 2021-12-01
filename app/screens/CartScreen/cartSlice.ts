import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Cart } from "../../models";

export interface CartState {
  loading: boolean;
  list: Cart[];
  total: number;
  quantity: number;
}

const initialState: CartState = {
  loading: false,
  list: [],
  total: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    fetchCartList(state) {
      state.loading = true;
    },
    fetchCartSuccess(state, action: PayloadAction<Cart[]>) {
      state.list = action.payload;
      state.loading = false;
    },
    fetchCartFailed(state) {
      state.loading = false;
    },
    addCart(state, action: PayloadAction<Cart>) {
      state.loading = true;
    },
    addCartSuccess(state, action: PayloadAction<Cart>) {
      const cart = action.payload;
      const index = state.list.findIndex((item) => item.id === cart.id);
      if (index === -1) {
        state.list.push(cart);
      } else {
        state.list[index].quantity += cart.quantity;
      }
      state.loading = false;
    },
    addCartFail(state) {
      state.loading = false;
    },
    setQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      state.loading = true;
    },
    setQuantitySuccess(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const index = state.list.findIndex((item) => item.id === id);
      state.list[index].quantity += quantity;
      if (state.list[index].quantity === 0) {
        state.list = state.list.filter((item) => item.id !== id);
      }
      state.loading = false;
    },
    getTotalPrice(state) {
      const totalPrice = state.list.reduce(
        (total, item) => total + item.price * item.quantity,
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
    removeCart(state, action: PayloadAction<number>) {
      state.loading = true;
    },
    removeCartSuccess(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.list = state.list.filter((item) => item.id !== id);
      state.loading = false;
    },
    removeAllCart(state) {
      state.loading = true;
    },
    removeAllCartSuccess(state) {
      state.list = [];
      state.loading = false;
    },
  },
});

//Actions
export const cartActions = cartSlice.actions;
//selectors
export const selectCartList = (state: RootState) => state.cart.list;
export const selectCartLoading = (state: RootState) => state.cart.loading;
export const selectCartTotal = (state: RootState) => state.cart.total;
export const selectCartQuantity = (state: RootState) => state.cart.quantity;
//reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;
