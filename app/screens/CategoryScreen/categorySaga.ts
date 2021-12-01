import { put, takeLatest } from "redux-saga/effects";
import Skateboard from "../../assets/images/Skateboard.png";
import Ski from "../../assets/images/Ski.png";
import Snowboard from "../../assets/images/Snowboard.png";
import Snowshoe from "../../assets/images/Snowshoe.png";
import Surf from "../../assets/images/Surf.png";
import Surfboard from "../../assets/images/Surfboard.png";
import { Category } from '../../models';
import { categoryActions } from './categorySlice';


function* fetchCategoryList(){
    try {
        const responsive: Category[] = listProduct;
        yield put(categoryActions.fetchCategorySuccess(responsive));
    } catch (error: any) {
        yield put(categoryActions.fetchCategoryFailed());
    }
}

export default function* categorySaga() {
    yield takeLatest(categoryActions.fetchCategoryList.type, fetchCategoryList);
}


const listProduct: Category[] = [
    {
      id: 1,
      name: "Ván trượt truyết",
      image: Ski,
      price: 50,
      sale: "10%",
    },
    {
      id: 2,
      name: "Ván Snowboard 360",
      image: Snowboard,
      price: 15,
      sale: "40%",
    },
    {
      id: 3,
      name: "Giày Snowshoe",
      image: Snowshoe,
      price: 30,
      sale: "30%",
    },
    {
      id: 4,
      name: "Ván Skateboard Super",
      image: Skateboard,
      price: 49,
      sale: "20%",
    },
    { 
      id: 5, 
      name: "Ván Surf BT5", 
      image: Surf, 
      price: 67, 
      sale: "10%" 
    },
    {
      id: 6,
      name: "Cặp Ván Surfboard",
      image: Surfboard,
      price: 58,
      sale: "50%",
    },
  ];