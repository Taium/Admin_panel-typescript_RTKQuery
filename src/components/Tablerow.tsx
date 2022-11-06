import React, { useEffect, useState } from 'react';
type propsproduct = {
    id: number,
    name: string,
    price: number,
    available_qty?: number,
    total_qty: number,
}
interface UserProps {
    produc: propsproduct,
  }
const Tablerow = ({produc}:UserProps) => {
    const  [subtotal,setSubtotal] =useState(0)
    const {id, name, total_qty,price,available_qty} = produc;
    useEffect(() => {
        const stotal=total_qty * price
        setSubtotal(stotal)
    }, [id])

    return (
        <div>{id>0 &&
            <tr>
            
                    <td className="py-1 w-1/12 text-left" >{name}</td>
                    <td className="pl-20 py-1 w-2/12 text-right" >{total_qty}</td>
                    <td  className="pl-20 py-1 w-3/12 text-right">{subtotal}</td>
            </tr> 
}
        </div>
    );
};

export default Tablerow;