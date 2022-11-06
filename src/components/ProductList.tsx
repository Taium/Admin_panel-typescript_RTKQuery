import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { RootState } from "../features/redux/store";
import { useGetProductsQuery } from "../features/api/ApiSlice";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/redux/product/productSlice";

interface product {
  id: number;
  name?: string;
  total_qty: number;
  total_price: number;
}
interface todos {
  id: number;
  name: string;
  price: number;
  available_qty: number;
}
export default function ProductList() {
  const [val, setVal] = useState<string>("");
  const [product, setProduct] = useState<any>();
  const [todo, setToo] = useState<any>();
  const dispatch = useDispatch();

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  // const products:any=todos
  // setProduct(products)

  
  const handChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setVal(e.currentTarget.value);
    
  };
  const handleClick = () => {
    const result: any = todos?.data.filter(({ name }:any) =>
      name.toLowerCase().includes(val.toLowerCase())
    );
    if (result.length > 0) {
      dispatch(addProduct(result));
      setProduct(result);
      
    } else {
      setProduct([]);
    }
    // const result:any = todos?.filter(codeFilter => codeFilter.name === val)
    // if (result.length > 0) {
    //   setProduct(result)
    //   console.log(result);
    // } else {
    //   setProduct([])
    // }
  };
  

  const allProducts = useSelector((state: any) => state.products);
  const [productValue, setProductValue] = useState<any>([]);
  useEffect(() => {
    setProductValue(allProducts);
  }, [allProducts]);

  return (
    <>
      <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
        <div className="flex items-center">
          <div className="flex border border-purple-200 rounded">
            <input
              type="text"
              className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search... your product name"
              value={val}
              onChange={handChange}
            />
            <button
              onClick={handleClick}
              className="px-4 text-white bg-purple-600 border-l rounded "
            >
              Search
            </button>
          </div>
        </div>

        {productValue && productValue.length > 0 && productValue?.map((product: todos) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
