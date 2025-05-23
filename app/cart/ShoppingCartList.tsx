"use client";

import { useState } from "react";
import { Product } from "../product-data";
import Link from "next/link";

export default function ShoppingCartList({
  initialCartProducts,
}: {
  initialCartProducts: Product[];
}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  async function removeFromCart(productId: string) {
    const response = fetch("http://localhost:3000/api/users/2/cart", {
      method: "DELETE",
      body: JSON.stringify({
        productId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const updatedCartProducts = await (await response).json();
    setCartProducts(updatedCartProducts);
  }

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
              <div>
                <div className="flex justify-start mb-4 h-25 relative">
                  <img
                    src={"/" + product.imageUrl}
                    alt={product.name}
                    className="object-cover h-20 w-auto rounded-lg"
                  />
                </div>

                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

                <p className="text-gray-600">${product.price}</p>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromCart(product.id);
                  }}
                >
                  Remove from Cart
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
