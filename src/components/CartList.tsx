import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import TotalItem from "./TotalItem";
import TotalPrice from "./TotalPrice";
import { RootState } from "../features/redux/rootReducer";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";

interface todos {
  id: number;
  name: string;
  price: number;
  available_qty: number;
}
interface propsBTN {
  handleprint: () => void;
}
export const CartList = (
  () => {
    const cartProducts = useSelector((state: RootState) => state.carts);
    console.log(cartProducts);
    return (
      <div
       
        className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
      >
        <div className="grid place-items-end">
          <Link to="/dashboard/checkout">
          <button
            type="button"
            
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            CHECKOUT
          </button>
          </Link>
        </div>

        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
          <div className="grid place-items-center">
            <h3>INVOICE</h3>
          </div>

          {cartProducts.length > 0 &&
            cartProducts.map((product) => (
              <CartProduct product={product} key={product.id} />
            ))}

          <TotalItem />
        </div>

        <TotalPrice />
      </div>
    );
  }
);

export default CartList;
