import { useState } from "react";

import ProductForm from "../components/ProductForm.jsx";
import ProductTable from "../components/ProductTable.jsx";
import Header from "../components/Header.jsx";

function ProductPage() {
  const [products, setProducts] = useState([
    { name: "Sendal", stock: 5 },
    { name: "Gelas", stock: 10 },
  ]);

  return (
    <>
      <Header title={"Products Data"} />
      <h1 className="px-10 py-5 text-3xl font-bold mb-4">Product Data</h1>
      <div className="px-10 flex gap-30">
        <ProductForm setProducts={setProducts} />
        <ProductTable products={products} />
      </div>
    </>
  );
}

export default ProductPage;
