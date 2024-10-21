import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductTable from "./ProductTable";
import SideBar from './SideBar';

function Products() {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  
  // Function to toggle the Add Product Form
  const toggleAddProductForm = () => {
    setShowAddProductForm(!showAddProductForm);
  };

  return (
    <div className="flex p-6">
      <SideBar />
      <div className="flex-grow ml-4"> {/* Add margin to the left for spacing */}
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Product Inventory</h1>
        
        {/* Search and Filter Bars */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by Name"
            className="border rounded py-2 px-4 mr-2 flex-grow"
          />
          <input
            type="text"
            placeholder="Filter by SKU"
            className="border rounded py-2 px-4 mr-2 flex-grow"
          />
          <button
            onClick={toggleAddProductForm}
            className="bg-blue-500 text-white rounded py-2 px-4"
          >
            +
          </button>
        </div>

        {/* Conditionally render AddProductForm */}
        {showAddProductForm && <AddProductForm toggleForm={toggleAddProductForm} />}
        
        <ProductTable />
      </div>
    </div>
  );
}

export default Products;
