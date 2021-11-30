import { all } from 'redux-saga/effects';
import cartSaga from '../screens/CartScreen/cartSaga';
import categorySaga from '../screens/CategoryScreen/categorySaga';

export default function* rootSaga() {
    yield all([categorySaga(), cartSaga()]);
}