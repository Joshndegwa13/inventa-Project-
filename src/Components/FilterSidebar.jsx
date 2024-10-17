import React, { useState } from "react";

const FilterSidebar = ({ onFilter }) => {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");

  const handleFilter = () => {
    onFilter({ sku, name }); // Pass the filter criteria back to the parent
  };

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105">
      <h2 className="font-bold text-blue-600 text-lg mb-4">Filter Products</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update state on change
        className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:border-blue-500 shadow-sm transition-all duration-200 hover:shadow-md"
      />
      <input
        type="text"
        placeholder="Filter by SKU"
        value={sku}
        onChange={(e) => setSku(e.target.value)} // Update state on change
        className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:border-blue-500 shadow-sm transition-all duration-200 hover:shadow-md"
      />
      <button
        onClick={handleFilter} // Call filter function on button click
        className="bg-blue-600 text-white px-4 py-2 w-full rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default FilterSidebar;
