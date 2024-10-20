import React, { useState } from "react";
import AddProductForm from "./Components/AddProductForm";
import ProductTable from "./Components/ProductTable";
import ProductFilter from "./Components/ProductFilter";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ sku: "", name: "" });
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
    setShowForm(false); // Hide form after adding a product
  };

  const handleEditProduct = (editedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.sku === editedProduct.sku ? editedProduct : product
      )
    );
  };

  const handleDeleteProduct = (sku) => {
    setProducts((prev) => prev.filter((product) => product.sku !== sku));
  };

  const handleFilterChange = (name, value) => {
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filter.sku === "" || product.sku.includes(filter.sku)) &&
      (filter.name === "" || product.name.toLowerCase().includes(filter.name.toLowerCase()))
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Product Inventory</h1>
      {/* Button to show the Add Product Form */}
      <div className="flex items-center mb-4">
        <ProductFilter filter={filter} onFilterChange={handleFilterChange} />
        <button
          onClick={() => setShowForm((prev) => !prev)} // Toggle form visibility
          className="ml-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          +
        </button>
      </div>
      {showForm && (
        <AddProductForm 
          onAdd={handleAddProduct} 
          onClose={() => setShowForm(false)} // Pass onClose to hide the form
        />
      )}
      <ProductTable
        products={filteredProducts}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
};

export default App;
