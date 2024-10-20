import React, { useState } from "react";
import AddProductForm from "./Components/AddProductForm";
import ProductTable from "./Components/ProductTable";
import ProductFilter from "./Components/ProductFilter"; 

const App = () => {
  const [products, setProducts] = useState([]); // State to hold the list of products
  const [filter, setFilter] = useState({ sku: "", name: "" }); // State to hold filter criteria
  const [showAddProductForm, setShowAddProductForm] = useState(false); // State to control the visibility of AddProductForm
  
  // Function to add a new product
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
    setShowAddProductForm(false); // Hide the form after adding
  };

  // Function to edit an existing product
  const handleEditProduct = (editedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.sku === editedProduct.sku ? editedProduct : product
      )
    );
  };

  // Function to delete a product
  const handleDeleteProduct = (sku) => {
    setProducts((prev) => prev.filter((product) => product.sku !== sku));
  };

  // Function to handle filter changes
  const handleFilterChange = (name, value) => {
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Product Inventory</h1>
      <ProductFilter filter={filter} onFilterChange={handleFilterChange} />
      
      {/* Plus Button to add product */}
      <button
        onClick={() => setShowAddProductForm(!showAddProductForm)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        +
      </button>
      
      {/* Show AddProductForm only when showAddProductForm is true */}
      {showAddProductForm && (
        <AddProductForm onAdd={handleAddProduct} onClose={() => setShowAddProductForm(false)} />
      )}

      <ProductTable
        products={products.filter((product) =>
          (filter.sku === "" || product.sku.includes(filter.sku)) &&
          (filter.name === "" || product.name.toLowerCase().includes(filter.name.toLowerCase()))
        )}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
};

export default App;
