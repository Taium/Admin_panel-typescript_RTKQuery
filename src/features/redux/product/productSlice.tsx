import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface product {
  id: number;
  name?: string;
  total_qty: number;
  total_price: number;
}
const initialState = [
  {
    id: 0,
    name: "",
    price: 0,
    available_qty: 0,
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
            return action.payload
      },
      increment: (state, action) => {
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          available_qty: product.available_qty + 1,
        };
      });
    },
    decrement: (state, action) => {

      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          available_qty: product.available_qty - 1,
        };
      });
    },
  },
});
export default productSlice.reducer;
export const { increment, decrement,addProduct } = productSlice.actions;
