import { Action, PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import { Cart } from '../../models/Cart';
import { cartActions } from "./cartSlice";

function* addCart(action: PayloadAction<Cart>){
    try{
        yield put(cartActions.addCartSuccess(action.payload));
    }catch(error){
        yield put(cartActions.addCartFail());
    }
    yield put(cartActions.getQuantity());
    yield put(cartActions.getTotalPrice());
}

function* setQuantity(action: PayloadAction<{id: number, quantity: number}>) {
    yield put(cartActions.setQuantitySuccess(action.payload));
    yield put(cartActions.getQuantity());
    yield put(cartActions.getTotalPrice());
}

function* removeCart(action: PayloadAction<number>) {
    yield put(cartActions.removeCartSuccess(action.payload));
    yield put(cartActions.getQuantity());
    yield put(cartActions.getTotalPrice());
}

function* removeAllCart(action: Action){
    yield put(cartActions.removeAllCartSuccess());
    yield put(cartActions.getQuantity());
    yield put(cartActions.getTotalPrice());
}

export default function* cartSaga() {
    yield takeLatest(cartActions.addCart.type, addCart);
    yield takeLatest(cartActions.setQuantity.type, setQuantity);
    yield takeLatest(cartActions.removeCart.type, removeCart);
    yield takeLatest(cartActions.removeAllCart.type, removeAllCart);
}
