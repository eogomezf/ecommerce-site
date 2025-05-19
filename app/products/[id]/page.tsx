import { products } from "@/app/product-data";
import Image from "next/image";

function productDetail({ params }: { params: { id: string } }) {
  const product = products.find((product) => product.id === params.id);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <Image
        src={"/" + product.imageUrl}
        alt={product.name}
        width={100}
        height={100}
        className="w-full h-48 object-cover rounded"
      />
      <p className="text-lg font-semibold">${product.price}</p>
      <p>{product.description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </>
  );
}

export default productDetail;
