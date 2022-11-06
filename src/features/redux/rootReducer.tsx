import { combineReducers } from "redux";
import productReducer from '../redux/product/productSlice';
import cartReducer from '../redux/cart/cartSlice';
import { apiSlice } from '../api/ApiSlice';


const rootReducer = combineReducers({
    carts: cartReducer,
    products: productReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
