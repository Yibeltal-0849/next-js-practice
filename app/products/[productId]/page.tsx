
//dynamic route

export default async function ProductDetail({ params }: {
  params: Promise<{ productId: string }>
}) {

  const { productId } = await params;

  return (
    <div>
      <h1>product det ail {productId}</h1>
    </div>
  );
}
