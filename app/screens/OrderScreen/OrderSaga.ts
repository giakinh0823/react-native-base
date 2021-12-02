import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { Cart, Order } from '../../models';
import { orderActions } from './OrderSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getOrders(): Promise<Order[]> {
  const orders = await AsyncStorage.getItem("@orders");
  return JSON.parse(orders ?? "[]");
}

function* fetchOrders() {
  try {
    const orders: Order[] = yield call(getOrders);
    yield put(orderActions.fetchOrderSuccess(orders));
    yield put(orderActions.getQuantity());
    yield put(orderActions.getTotalPrice());
  } catch (error) {
    yield put(orderActions.fetchOrderFailed());
  }
}

function* addOrder(action: PayloadAction<Cart[]>){
    try{
        yield put(orderActions.addOrderSuccess(action.payload));
    }catch(error){
        yield put(orderActions.addOrderFail());
    }
    yield put(orderActions.getQuantity());
    yield put(orderActions.getTotalPrice());
}


export default function* orderSaga() {
    yield takeLatest(orderActions.fetchOrderList.type, fetchOrders);
    yield takeLatest(orderActions.addOrder.type, addOrder);
}
