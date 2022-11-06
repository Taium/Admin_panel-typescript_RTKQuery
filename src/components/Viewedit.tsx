import React, { useState } from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { useGetProductsQuery, useUpdateProductMutation } from '../features/api/ApiSlice';
interface Props {
id:number;
setShowModal:any;  
}
const Viewedit = ({id,setShowModal}:Props) => {
    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error,
      } = useGetProductsQuery();
    const cat = todos?.data.find((cat:any) => cat.id === id);
    const [pname, setPname] = useState(cat.name);
  const [price, setPrice] = useState<number>(cat.price);
  const [qty, setQty] = useState<any>(cat.available_qty);
   
    
    const[updateProduct]=useUpdateProductMutation()
    const handleProduct=()=>{
        updateProduct({...cat,name:pname,price:price,available_qty:qty})
        swal("data updated successfully");
        setShowModal(false)
        

    }

    return (
        <div>
            <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            name
                          </label>
                          <input
                            value={pname}
                            onChange={(e) => setPname(e.target.value)}
                            placeholder="Product Name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            price
                          </label>
                          <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(parseInt(e.target.value))}
                            placeholder="Product Price"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            quantity
                          </label>
                          <input
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                            placeholder="Product Quantity"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                       
                      </div>
                    </div>
                    <div className=" bg-gray-50 text-right sm:px-6">
                      <button
                        onClick={handleProduct}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Update
                      </button>
                    </div>
        </div>
    );
};

export default Viewedit;