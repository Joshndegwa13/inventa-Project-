import React from "react";

const ProductFilter = ({ filter, onFilterChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <div className="flex space-x-4 mb-6">
      <input
        type="text"
        name="sku"
        value={filter.sku}
        onChange={handleChange}
        placeholder="Filter by SKU"
        className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
      />
      <input
        type="text"
        name="name"
        value={filter.name}
        onChange={handleChange}
        placeholder="Filter by Name"
        className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
      />
    </div>
  );
};

export default ProductFilter;
