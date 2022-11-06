import React from 'react';
type propsproduct = {
    id: number,
    name: string,
    price: number,
    available_qty?: number,
    total_qty?: number,
}
interface UserProps {
    product: propsproduct,
  }
const CheckoutProduct = ({product}:UserProps) => {
    const {id, name, total_qty,available_qty} = product;
    return (
        <div>
             <div className="flex justify-between  mb-2">
            <div className="text-lg py-2">
                <p>{name}</p>
            </div>
            { id >0 &&
            <div className="text-lg py-2">
                <div
                    className="flex flex-row space-x-2 w-full items-center rounded-lg"
                >
                    
                    <p>{total_qty}</p>
                    
                </div>
            </div>
            }
        </div>
        </div>
    );
};

export default CheckoutProduct;