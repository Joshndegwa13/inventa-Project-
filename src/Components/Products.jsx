import React from "react";
import AddProductForm from "./AddProductForm"
import ProductTable from "./ProductTable";

function Products() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">
        Product Inventory
      </h1>
      <AddProductForm />
      <ProductTable />
    </div>
  );
}

export default Products;
