import React, { useState } from "react";
import SideBar from './SideBar';

function AddProductForm({ onAdd }) {
  const [product, setProduct] = useState({
    sku: "",
    name: "",
    description: "",
    stock_amount: "",
    price: "",
    cost: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5555/api/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        onAdd(data);
        setProduct({
          sku: "",
          name: "",
          description: "",
          stock_amount: "",
          price: "",
          cost: "",
        });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex flex-row">
      <SideBar />
    <form
    
      className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      <div className="grid grid-cols-1 gap-6">
        <input
          type="text"
          name="sku"
          placeholder="Product SKU"
          value={product.sku}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          name="stock_amount"
          placeholder="Stock Amount"
          value={product.stock_amount}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="number"
          name="cost"
          placeholder="Cost"
          value={product.cost}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
    </form>
    </div>

  );
}

export default AddProductForm;
