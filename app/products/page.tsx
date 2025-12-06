import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  const productId=100;
  return (
    <div>
      <h1>Product List</h1>
      <Link href='products/1'>  <h2>Product 1</h2></Link>
    {/* replace is used to go home page */}
      <Link href='/products/2' replace>  <h2>Product 2</h2></Link>
    
      <Link href='/products/3'>  <h2>Product 3</h2></Link>
      <Link href={`products/${productId}`}>  <h2>Product {productId}</h2></Link>
    
    
    </div>
  )
}
