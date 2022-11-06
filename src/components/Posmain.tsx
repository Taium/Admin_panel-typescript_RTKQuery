import React from "react";
import CartList from "./CartList";
import Header from "./Header";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";

const Posmain = () => {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="container mx-auto ">
          <div className="bg-gray-50 h-full md:h-screen">
            <Header></Header>

            <div className="grid grid-cols-12 gap-6">
              <ProductList />

              <CartList></CartList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posmain;
