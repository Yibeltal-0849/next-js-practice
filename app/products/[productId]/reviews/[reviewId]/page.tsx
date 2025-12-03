
//nested dynamic route
import React from "react";
import { notFound } from "next/navigation";
export default async function Review({
  params,
}: {
  params: { productId: string; reviewId: number };
}) {
  const { productId, reviewId } =await params;
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
