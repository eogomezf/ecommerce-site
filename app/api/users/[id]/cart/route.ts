import { products } from "@/app/product-data";
import { NextRequest } from "next/server";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  "1": ["123", "234"],
  "2": ["345", "456"],
  "3": ["234"],
};

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const productId = carts[userId];

  if (!productId) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const cartProducts = productId.map((id) =>
    products.find((product) => product.id === id)
  );

  if (!cartProducts) {
    return new Response("Product not found", { status: 404 });
  }

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

type CartBody = { productId: string };

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId];

  const cartProducts = carts[userId].map((id) =>
    products.find((product) => product.id === id)
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
