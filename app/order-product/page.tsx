
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';


export default function OrderProduct() {
    const Router=useRouter();
    const handlerClick=()=>{
console.log("Placing  yours orders")
Router.push("/");
    }
  return (
    <>
     <h1>Order Product</h1> 
     <button onClick={handlerClick}>Place Order</button>
    </>
  );
}
