import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  useAddCategoryMutation,
  useAddProductMutation,
  useAddSubcategoryMutation,
  useGetCategoryQuery,
  useGetSubcategoryQuery,
} from "../features/api/ApiSlice";
import Sidebar from "./Sidebar";

const Addpage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModalb, setShowModalb] = React.useState(false);

  const [cat, setCat] = useState("");
  const [scat, setScat] = useState("");
  const [val, setVal] = useState<any>();
  const [sval, setSval] = useState<any>();
  const [cate, setCate] = useState([]);
  const [scate, setScate] = useState([]);
  const [addCategory, { error }] = useAddCategoryMutation();
  const [addSubcategory] = useAddSubcategoryMutation();
  const [addProduct] = useAddProductMutation();
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState<number>();
  const [qty, setQty] = useState<any>();

  const {
    data: category,
    isLoading,
    isSuccess,
    isError,
  } = useGetCategoryQuery<any>();
  const { data: subcategory } = useGetSubcategoryQuery<any>();

  const handleSubmit = () => {
    addCategory({ name: cat })
      .unwrap()
      .then((payload) => console.log(payload))
      .catch((error) => console.log(error));

    setShowModal(false);
  };

  const handleSubcat = () => {
    addSubcategory({ name: scat, cid: val })
      .unwrap()
      .then((payload) => swal(payload.message))
      .catch((error) => swal(error.messege));
  };
  const handleProduct = () => {
    addProduct({ name: pname, price: price, available_qty: qty, scid: sval })
      .unwrap()
      .then((payload) => swal(payload.message))
      .catch((error) => swal(error.messege));
  };
  useEffect(() => {
    setCate(category?.data);
    setScate(subcategory?.data);
  }, [cat,
    scat,
    pname,
    category,
    subcategory,
    addCategory, addSubcategory, addProduct]);

  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="pl-5 container mx-auto ">
          <div className="bg-gray-50 h-full md:h-screen">
            {/* <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Add Category 
            </h2>
                <div className="flex items-center">
                
            <br/>
                  <div className="flex border border-purple-200 rounded">
                    <input
                      type="text"
                      className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="add category"
                      value={cat}
                      onChange={(e) => setCat(e.target.value)}
                    />
                    <button
                      onClick={handleSubmit}
                      className="px-4 text-white bg-purple-600 border-l rounded "
                    >
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className=" flex items-start justify-between pl-5 p-5 border-b border-solid border-slate-200 rounded-t">
                        <h5 className="text-3xl text-slate-500 font-semibold">
                          Add Category
                        </h5>
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
                        <div className=" sm:mt-0">
                          <div className="md:grid md:grid-cols-2 md:gap-6">
                            <div className=" md:mt-0 md:col-span-2">
                              <div className=" mt-10 shadow overflow-hidden sm:rounded-md">
                                <div className="px-1 py-1 bg-white sm:p-6">
                                  <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                      <label className="block text-sm font-medium text-gray-700">
                                        name
                                      </label>
                                      <input
                                        value={cat}
                                        onChange={(e) => setCat(e.target.value)}
                                        type="text"
                                        placeholder="Category Name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                  <button
                                    onClick={handleSubmit}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            {showModalb ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h5 className="text-3xl text-slate-500 font-semibold">
                          Add Sub Category
                        </h5>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModalb(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <div className="mt-0 sm:mt-0">
                          <div className="md:grid md:grid-cols-2 md:gap-6">
                            <div className="mt-0 md:mt-0 md:col-span-2">
                              <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                  <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                      <label className="block text-sm font-medium text-gray-700">
                                        name
                                      </label>
                                      <input
                                        value={scat}
                                        onChange={(e) =>
                                          setScat(e.target.value)
                                        }
                                        type="text"
                                        placeholder=" Sub Category Name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                      <label className="block text-sm font-medium text-gray-700">
                                        Category name
                                      </label>
                                      <select
                                        onChange={(e) => setVal(e.target.value)}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      >
                                        {cate &&
                                          cate?.map(
                                            (cat: any, index: number) => (
                                              <option
                                                value={cat.id}
                                                key={index}
                                              >
                                                {cat.name}
                                              </option>
                                            )
                                          )}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                  <button
                                    onClick={handleSubcat}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModalb(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            <br />
            <div className=" sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className=" md:mt-0 md:col-span-2">
                  <div className="p-5">
                  <button
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setShowModal(true)}
                  >
                    Add Category
                  </button>
                  <button
                    className=" ml-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setShowModalb(true)}
                  >
                    Add Sub Category
                  </button>
                  </div>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <h5 className=" text-cyan-200 text-center text-3xl font-extrabold text-gray-900">
                      Add Product
                    </h5>

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

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            sub-Category name
                          </label>
                          <select
                            onChange={(e) => setSval(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            {scate &&
                              scate?.map((scat: any, index: number) => (
                                <option value={scat.id} key={index}>
                                  {scat.name}
                                </option>
                              ))}
                          </select>{" "}
                        </div>
                      </div>
                    </div>
                    <div className=" bg-gray-50 text-right sm:px-6">
                      <button
                        onClick={handleProduct}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* all things go here... */}
      </div>
    </>
  );
};

export default Addpage;
