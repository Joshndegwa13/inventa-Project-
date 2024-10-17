import React, { useState, useEffect } from "react";

const AddProductForm = ({ onClose, onAdd, productToEdit }) => {
  const [product, setProduct] = useState({
    name: "",
    sku: "",
    condition: "New",
    location: "",
    available: "",
    reserved: "",
    onHand: "",
    price: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 transform slide-in-right fade-in border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          {productToEdit ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-sm hover:bg-gray-100 transition"
            required
          />
          <input
            type="text"
            name="sku"
            value={product.sku}
            onChange={handleChange}
            placeholder="SKU"
            className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-sm hover:bg-gray-100 transition"
            required
          />
          <select
            name="condition"
            value={product.condition}
            onChange={handleChange}
            className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-sm hover:bg-gray-100 transition"
          >
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
          <input
            type="text"
            name="location"
            value={product.location}
            onChange={handleChange}
            placeholder="Location"
            className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-sm hover:bg-gray-100 transition"
            required
          />
          <input
            type="number"
            name="available"
            value={product.available}
            onChange={handleChange}
            placeholder="Available Stock"
            className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-sm hover:bg-gray-100 transition"
          />
          <input
            type="number"
            name="reserved"
            value={product.reserved}
            onChange={handleChange}
            placeholder="Reserved Stock"
            className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-sm hover:bg-gray-100 transition"
          />
          <input
            type="number"
            name="onHand"
            value={product.onHand}
            onChange={handleChange}
            placeholder="On Hand Stock"
            className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-sm hover:bg-gray-100 transition"
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-sm hover:bg-gray-100 transition"
            required
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              {productToEdit ? "Update Product" : "Add Product"}
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 text-black px-6 py-3 rounded-full hover:bg-gray-400 transition shadow-md hover:shadow-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
