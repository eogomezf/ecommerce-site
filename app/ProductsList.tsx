import Image from "next/image";
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <Image
            src={"/" + product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
