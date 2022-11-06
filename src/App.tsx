import { Provider } from "react-redux";
import Header from "./components/Header";
// import Header from './components/Header';
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import store from "./features/redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Posmain from "./components/Posmain";
import Sidebar from "./components/Sidebar";
import Addpage from "./components/Addpage";
import View from "./components/View";

export default function App() {
  

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="bg-gray-50 h-full md:h-screen">
          
          <Routes>
            <Route  path="/dashboard" element={<PrivateRoute />}>
              
              <Route index element={<Home />} />
              <Route path="/dashboard/checkout" element={<Checkout />} />
              <Route path="/dashboard/pos" element={<Posmain />} />
              <Route path="/dashboard/add" element={<Addpage />} />
              <Route path="/dashboard/view" element={<View />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
          
        </div>
      </Provider>
    </BrowserRouter>
  );
}
