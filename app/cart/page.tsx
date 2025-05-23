import ShoppingCartList from "./ShoppingCartList";

async function CartPage() {
  const response = await fetch("http://localhost:3000/api/users/2/cart", {
    cache: "no-cache",
  });
  const cartProducts = await response.json();

  return <ShoppingCartList initialCartProducts={cartProducts} />;
}

export default CartPage;
