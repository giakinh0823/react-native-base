import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Category } from '../../models';

export interface CategoryState{
    loading: boolean;
    list: Category[],
}

const initialState: CategoryState = {
    loading: false,
    list: [],
}

const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        fetchCategoryList(state){
            state.loading = true;
        },
        fetchCategorySuccess(state, action: PayloadAction<Category[]>){
            state.list = action.payload;
            state.loading = false;
        },
        fetchCategoryFailed(state){
            state.loading = false;
        },
    },
})


//Actions
export const categoryActions = categorySlice.actions;
//selectors
export const selectCategoryList = (state: RootState) => state.category.list;
export const selectCategoryLoading = (state: RootState) => state.category.loading;
//reducer
const categoryReducer = categorySlice.reducer
export default categoryReducer