import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import cartReducer from '../screens/CartScreen/cartSlice';
import categoryReducer from '../screens/CategoryScreen/categorySlice';
import orderReducer from '../screens/OrderScreen/OrderSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer =  combineReducers({
   cart: cartReducer,
   category: categoryReducer,
   order: orderReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga) //saga middleware chạy rootSaga 

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;