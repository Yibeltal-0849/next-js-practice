
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';


export default function OrderProduct() {
    const Router=useRouter();
    const handlerClick=()=>{
console.log("Placing  yours orders")
Router.push("/"); // Navigate to home page
Router.back();// Navigate to previous page
Router.forward();// Navigate to next page in history
    }
  return (
    <>
     <h1>Order Product</h1> 
     <button onClick={handlerClick}>Place Order</button>
    </>
  );
}
