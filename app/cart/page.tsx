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
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <ul className="space-y-4">
        {cartProducts.map((product) => (
          <li
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <Link href={`/products/${product.id}`}>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

              <p className="text-gray-600">${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
