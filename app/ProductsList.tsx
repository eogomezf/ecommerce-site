"use client";
import Image from "next/image";
import { Product } from "./product-data";
import Link from "next/link";
import { useState } from "react";

export default function ProductsList({
  products,
  initialCartProducts,
}: {
  products: Product[];
  initialCartProducts: Product[];
}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  async function addToCart(productId: string) {
    const response = fetch("http://localhost:3000/api/users/2/cart", {
      method: "POST",
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

  function productIsInCart(productId: string) {
    return cartProducts.some((product) => product.id === productId);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-center mb-4 h-48 relative">
            <Image
              src={"/" + product.imageUrl}
              alt={product.name}
              width={100}
              height={100}
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

          <p className="text-gray-600">${product.price}</p>
          {productIsInCart(product.id) ? (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={(e) => {
                e.preventDefault();
                removeFromCart(product.id);
              }}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product.id);
              }}
            >
              Add to Cart
            </button>
          )}
        </Link>
      ))}
    </div>
  );
}
