import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Header() {
  let navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();

    navigate("/login");
  };
  return (
    <>
    <div className="grid place-items-center">
        <h1
            className="text-gray-900 font-bold text-3xl mt-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4"
        >
            Super Shop POS System
        </h1>
    </div>
    <div className="grid place-items-end">

    </div>
    
    </>
  )
}
