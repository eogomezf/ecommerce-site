import { products } from "@/app/product-data";

function productDetail({ params }: { params: { id: string } }) {
  const product = products.find((product) => product.id === params.id);
  if (!product) {
    return <div>Product not found</div>;
  }
  return <h1>{product.name}</h1>;
}

export default productDetail;
