import { all } from 'redux-saga/effects';
import cartSaga from '../screens/CartScreen/cartSaga';
import categorySaga from '../screens/CategoryScreen/categorySaga';
import orderSaga from '../screens/OrderScreen/OrderSaga';

export default function* rootSaga() {
    yield all([categorySaga(), cartSaga(), orderSaga()]);
}