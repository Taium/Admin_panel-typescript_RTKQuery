import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import '../components/styles/Checkout.css'
import { RootState } from '../features/redux/store';
import CheckoutProduct from './CheckoutProduct';
import Modalitem from './Modalitem';
import Sidebar from './Sidebar';
type product={
    id: number;
    title?: string,
    total_qty?: number;
    total_price?: any;
}
const Checkout = () => {
  const navigate = useNavigate()
  const componentRef = useRef<HTMLInputElement>(null);
    const handleprint = useReactToPrint({
      content: () => componentRef.current,
    });
    const [showModal, setShowModal] = React.useState(false);
    const [taka, setTaka] = React.useState<any>(0);
    const [rtaka, setRtaka] = React.useState<any>(0);
    const cartProducts = useSelector((state: RootState) => state.carts);
    const totalPrice = cartProducts.reduce(((total:number, product:product)=>product.total_price + total), 0)
    console.log("taka",taka);
    useEffect(() => {
      const rtotal=taka - totalPrice
      setRtaka(rtotal)
      
    }, [taka])
    return (
      <div className="flex">
      <Sidebar></Sidebar>
      <div className="container mx-auto ">
        <div className="bg-gray-50 h-full md:h-screen">
            <div className="mt-2">
            <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
            
                Checkout
            </h1>
            <div className="grid place-items-end">
          
          <button
            type="button"
            onClick={() => navigate(-1)}
            
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Previous
          </button>
          
        </div>
        </div>
        <div className="container mr-5 p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row mr-5">
            <div className="flex flex-col md:w-full mr-10">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form className="justify-center w-full mx-auto" method="post" >
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label  className="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input name="firstName" type="text" placeholder="First Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label  className="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input name="Last Name" type="text" placeholder="Last Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label 
                                        className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input name="Last Name" type="text" placeholder="Email"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label 
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address"  placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label 
                                        className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input name="city" type="text" placeholder="City"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label  className="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input name="postcode" type="text" placeholder="Post Code"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"/>
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6"><label 
                                    className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note"
                                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                     placeholder="Notes for delivery"></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="w-5/12 flex flex-col bg-blue-gray-50 h-full bg-white pr-4 pl-2 py-4">
        <div className="bg-white rounded-3xl flex flex-col h-full shadow">
          
          <div  className="flex-1 w-full p-4  select-none flex flex-col flex-wrap content-center justify-center">

            <p>
              Cart Product List
            </p>
          </div>

          
          
            <div
        className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
      >
       

        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
          <div className="grid place-items-center">
        
          </div>
          <div className="flex justify-between text-yellow-900 border-b-2 mb-2">
            <div className="text-lg  py-2">
                <p>Produc Name</p>
            </div>
           
            <div className="text-lg py-2">
                <div
                    className="flex flex-row space-x-2 w-full items-center rounded-lg"
                >
                    
                    <p>Quantity</p>
                    
                </div>
            </div>
            
        </div>

          {cartProducts.length > 0 &&
            cartProducts.map((product) => (
              <CheckoutProduct product={product} key={product.id} />
            ))}

          {/* <TotalItem /> */}
        </div>

        {/* <TotalPrice /> */}
      </div>
            
          
          {/* <!-- end of cart items --> */}

          {/* <!-- payment info --> */}
          <div className="select-none h-auto w-full text-center pt-3 pb-4 px-4">
            <div className="flex mb-3 text-lg font-semibold text-blue-gray-700">
              <div>TOTAL</div>
              <div className="text-right w-full" >{totalPrice}</div>
            </div>
            <div className="mb-3 text-blue-gray-700 px-3 pt-2 pb-3 rounded-lg bg-blue-gray-50">
              <div className="flex text-lg font-semibold">
                <div className="flex-grow text-left">CASH</div>
                <div className="flex text-right">
                  <div className="mr-2">taka</div>
                  <input value={taka} onChange={(e)=>setTaka(e.target.value)} type="text"/>
                </div>
              </div>
              
              
            </div>
            <div
              className="flex mb-3 text-lg font-semibold bg-cyan-50 text-blue-gray-700 rounded-lg py-2 px-3"
            >
              <div className="text-cyan-800">CHANGE</div>
              <div
                className="text-right flex-grow text-cyan-600"
                >
                    {rtaka}
              </div>
            </div>
            
            
            <button type="button"
              className="text-white bg-blue-gray-500 rounded-2xl text-lg w-full py-3 focus:outline-none"
             
              onClick={() => setShowModal(true)}
              
            >
              SUBMIT
            </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                
              <Modalitem  ref={componentRef} rtaka={rtaka}  totaltaka={taka}/>
           
                 
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={ handleprint }
                    
                  >
                    print
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


          </div>
          {/* <!-- end of payment info --> */}
        </div>
      </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Checkout;