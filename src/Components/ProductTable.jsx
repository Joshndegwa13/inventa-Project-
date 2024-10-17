import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-blue-700 text-white text-sm uppercase tracking-wider">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">SKU</th>
            <th className="py-3 px-4">Condition</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Available</th>
            <th className="py-3 px-4">Reserved</th>
            <th className="py-3 px-4">On Hand</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center py-4 text-gray-500">
                No Products Added
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-gray-100 transition duration-150 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-4 px-4 text-sm text-gray-700">{product.name}</td>
                <td className="py-4 px-4 text-sm text-gray-700">{product.sku}</td>
                <td className="py-4 px-4 text-sm text-gray-700">{product.condition}</td>
                <td className="py-4 px-4 text-sm text-gray-700">{product.location}</td>
                <td className="py-4 px-4 text-sm text-gray-700">{product.available}</td>
                <td className="py-4 px-4 text-sm text-gray-700">{product.reserved}</td>
                <td className="py-4 px-4 text-sm text-gray-700">{product.onHand}</td>
                <td className="py-4 px-4 text-sm text-gray-700">${product.price}</td>
                <td className="py-4 px-4 flex space-x-2">
                  <button
                    onClick={() => onEdit(product)}
                    className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"
                    title="Edit Product"
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => onDelete(product.sku)} // Pass SKU for deletion
                    className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full hover:bg-red-700 transition shadow-md"
                    title="Delete Product"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
