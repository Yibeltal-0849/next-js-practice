import React from 'react'
function getFunction(count:number){
  
  return Math.floor(Math.random()*count);
}
const random=getFunction(2);

if(random===1){
  
  throw new Error("Error loading review")
}  
export default function ProductDetailLayout({children,}:{children:React.ReactNode}) {
  return (
    <>
      {children}
      {/* below is nested layout that is displayed for each product in addition to header and footer*/}
      <h2>   Products </h2>
    </>
  )
}
