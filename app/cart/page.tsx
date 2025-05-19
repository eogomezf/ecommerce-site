"use client";
import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";

function CartPage() {
  const [cartIds] = useState(["123", "345"]);

  const cartProducts = cartIds.map(
    (id) => products.find((product) => product.id === id)!
  );
  return (
    <>
      <h1>Shopping Cart</h1>
      {cartProducts.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="flex items-center justify-between p-4 border-b"
        >
          {/* <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover" /> */}
          <div className="flex-1 ml-4">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-semibold">${product.price}</p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Remove
          </button>
        </Link>
      ))}
    </>
  );
}

export default CartPage;
