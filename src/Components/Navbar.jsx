import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-700 text-white shadow-lg fixed top-0 left-0 w-full z-50">
     
      <h1
        className="text-3xl font-bold tracking-wide cursor-pointer ml-4" 
        onClick={() => navigate('/')}
      >
        Inventa
      </h1>

      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-white text-blue-700 rounded-lg shadow hover:bg-blue-100 transition duration-300 font-semibold text-sm"
          onClick={() => navigate('/reports')} 
        >
          Dashboard
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
