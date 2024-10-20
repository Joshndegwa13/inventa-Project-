import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-600 shadow-md p-4 rounded-lg mb-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">Sales and Reports</h1>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-300">
        Home Products
      </button>
    </div>
  );
};

export default Navbar;
