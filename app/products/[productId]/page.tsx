
// //dynamic route

// export default async function ProductDetail({ params }: {
//   params: Promise<{ productId: string }>
// }) {

//   const { productId } = await params;

//   return (
//     <div>
//       <h1>product detail {productId}</h1>
//     </div>
//   );
// }

// dynamic route
// app/products/[productId]/page.tsx
import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

// Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;

  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
}

// Page Component
export default async function ProductDetail({ params }: Props) {
  const { productId } = await params;

  return (
    <div>
      <h1>Product detail {productId}</h1>
    </div>
  );
}


