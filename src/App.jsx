import React, { useState } from "react";
import ProductTable from "./Components/ProductTable";
import AddProductForm from "./Components/AddProductForm";
import FilterSidebar from "./Components/FilterSidebar";

export default function App() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const addProduct = (newProduct) => {
    if (editingProduct) {
      setProducts(
        products.map((product) =>
          product.sku === editingProduct.sku ? newProduct : product
        )
      );
      setEditingProduct(null);
    } else {
      setProducts([...products, newProduct]);
    }
    setFilteredProducts([...products, newProduct]); // Update filtered products after adding
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFilter = ({ sku, name }) => {
    const filtered = products.filter((product) => {
      const matchesSku = sku ? product.sku.includes(sku) : true;
      const matchesName = name ? product.name.toLowerCase().includes(name.toLowerCase()) : true;
      return matchesSku && matchesName;
    });
    setFilteredProducts(filtered);
  };

  // Function to handle product deletion
  const handleDelete = (sku) => {
    const updatedProducts = products.filter(product => product.sku !== sku);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts); // Update filtered products if deletion occurs
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <FilterSidebar onFilter={handleFilter} />
      <div className="flex-1 p-6 bg-white shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Products</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            + Add Product
          </button>
        </div>
        <ProductTable 
          products={filteredProducts.length > 0 ? filteredProducts : products} 
          onEdit={editProduct} 
          onDelete={handleDelete} // Pass delete handler to ProductTable
        />
        {showForm && (
          <AddProductForm
            onClose={() => {
              setShowForm(false);
              setEditingProduct(null);
            }}
            onAdd={addProduct}
            productToEdit={editingProduct}
          />
        )}
      </div>
    </div>
  );
}
