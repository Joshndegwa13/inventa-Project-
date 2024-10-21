import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FolderIcon from '@mui/icons-material/Folder';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from "react-router-dom";


const SideBar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="lg:w-64 p-5">
        <h1 className="mb-6 text-4xl font-bold text-blue-600">Inventa</h1>
        <ul className="space-y-4 text-sm">
          <li className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
          onClick={() => navigate('/')}
          >
            <HomeIcon className="mt-4" /> <span className="ml-2 mt-4">Home</span>
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
          onClick={() => navigate('/contact')}
          >
            <InterpreterModeIcon /> <span className="ml-2">Contacts</span>
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
          onClick={() => navigate('/products')}>
            <LocalOfferIcon className="mb-6" /> <span className="ml-2 mb-6">Products</span>
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
          onClick={() => navigate('/sales')} >
            <ShoppingCartIcon /> <span className="ml-2">Sales</span>
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
          onClick={() => navigate('/alerts')}>
            <NotificationsNoneIcon className="mb-6" /> <span className="ml-2 mb-6">Alerts</span>
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
          onClick={() => navigate('/reports')}
          >
            <FolderIcon /> <span className="ml-2">Reports</span>
          </li>
          <li className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
          onClick={() => navigate('/aboutus')}
          >
          
            <ManageHistoryIcon /> <span className="ml-2">About Us</span>
          </li>
        </ul>
      </div>
        </div>
    )
}

export default SideBar