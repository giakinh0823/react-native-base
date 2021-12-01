import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import { Cart } from '../../models';
import { orderActions } from './OrderSlice';

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
    yield takeLatest(orderActions.addOrder.type, addOrder);
}
