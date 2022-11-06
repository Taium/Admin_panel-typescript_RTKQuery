import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features/redux/store';
import Tablerow from './Tablerow';
type propsproduct = {
    id: number,
    name: string,
    price: number,
    available_qty?: number,
    total_qty?: number,
}
interface UserProps {
    rtaka: any,
    totaltaka:any,
    
  }
  type product={
    id: number;
    title?: string,
    total_qty?: number;
    total_price?: any;
}
const Modalitem =React.forwardRef<HTMLInputElement, UserProps>(
  (props, ref) => {
    const cartProducts = useSelector((state: RootState) => state.carts);
    const totalPrice = cartProducts.reduce(((total:number, product:product)=>product.total_price + total), 0)
    
    
    console.log()
    return (
        <div ref={ref}>
        

    
        <div  className="text-left w-fit text-sm p-6 overflow-auto">
          <div className="text-center">
            <h2 className="text-xl font-semibold"> POS</h2>
            <p>CABANG SUPER SHOP</p>
          </div>
          <div className="flex mt-4 text-xs">
            <div className="flex-grow">No: </div>
            <div >Date:</div>
          </div>
          
          <div>
            {/* <table >
              <thead>
                <tr>
                  
                  <th className="  ">Item</th>
                  <th className="">Qty</th>
                  <th className=" ">Subtotal</th>
                </tr>
              </thead>
              <tbody>
               
                    
                {
               cartProducts.length>0 && 
               cartProducts?.map((produc) => (
              <Tablerow produc={produc} key={produc.id} />
            ))
            }
            
                  
                
              </tbody>
            </table> */}
            <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                      No:
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Item
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Subtotal
                                    </th>
                                   
                                    
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {cartProducts.length>0 && 
               cartProducts?.map((cat: any, index: number) => (
                cat.id>0 &&
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {index }
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {cat.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {cat.total_qty}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {cat.total_qty * cat.price}
                                    </td>
                                    
                                  
                                </tr>
))}
                            </tbody>
                        </table>
          </div>
          <hr className="my-2"/>
          <div>
            <div className="flex w-72 font-semibold">
              <div className="pl-10 flex-grow">TOTAL</div>
              <div className="pr-0 ">{totalPrice}</div>
            </div>
            <div className="flex w-72 text-xs font-semibold">
              <div className="pl-10 flex-grow">PAY AMOUNT</div>
              <div >{props.totaltaka}</div>
            </div>
            <hr className="my-2"/>
            <div className="flex w-72 text-xs font-semibold">
              <div className="pl-10 flex-grow">CHANGE</div>
              <div > {props.rtaka}</div>
            </div>
          </div>
        </div>
        
      </div>

  
        
    );
});

export default Modalitem;