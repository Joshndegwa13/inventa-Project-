// src/components/EditProductForm.jsx

import React, { useState } from "react";

function EditProductForm({ product, onUpdate }) {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5555/api/products/${updatedProduct.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        onUpdate(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form
      className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold mb-6">Edit Product</h3>
      <div className="grid grid-cols-1 gap-6">
        <input
          type="text"
          name="name"
          value={updatedProduct.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="description"
          value={updatedProduct.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          name="quantity"
          value={updatedProduct.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="number"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Update Product
        </button>
      </div>
    </form>
  );
}

export default EditProductForm;
