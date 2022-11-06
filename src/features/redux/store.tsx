// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// import thunk from "redux-thunk"
// import rootReducer from "./rootReducer";

// const store = createStore(
//     rootReducer,
//     {},
//     composeWithDevTools(applyMiddleware(thunk))
// );
// console.log(store)

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";
import productReducer from '../redux/product/productSlice';
import cartReducer from '../redux/cart/cartSlice';
import { apiSlice } from '../api/ApiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';


 const store= configureStore({
  reducer: {
    carts: cartReducer,
    products: productReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof rootReducer>
export default store
