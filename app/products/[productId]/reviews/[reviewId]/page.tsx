
//nested dynamic route
import React from "react";
import { notFound } from "next/navigation";
function getFunction(count:number){
  
  return Math.floor(Math.random()*count);
}
export default async function Review({
  params,
}: {
  params: { productId: string; reviewId: number };
}) {
  const { productId, reviewId } =await params;

const random=getFunction(2);

if(random===1){
  
  throw new Error("Error loading review")
}


  if(reviewId>1000){
notFound()
  }

  return (
    <div>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </div>
  );
}
