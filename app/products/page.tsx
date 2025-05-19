import { products } from "../product-data";
import ProductsList from "../ProductsList";

function ProductsPage() {
  return (
    <>
      <h1>Products List</h1>
      <ProductsList products={products} />
    </>
  );
}

export default ProductsPage;
