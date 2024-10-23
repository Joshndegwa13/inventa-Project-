import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/Forgotpassword';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Reports from './Components/Reports';
import SalesPage from './Components/SalesPage';
import PaymentPage from './Components/PaymentPage';
import Alerts from "./Components/Alerts";
import AddProductForm from "./Components/AddProductForm";
import ProductList from "./Components/ProductList";
import CSVUploadForm from "./Components/CSVUploadForm";

import ProtectedRoutes from "./context/ProtectedRoutes";
function App() {
  const [products, setProducts] = useState([]);

  return (
    
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Protected routes */}
          {/* <Route element={<ProtectedRoutes />}> */}
            <Route
              path="/add-product"
              element={
                
          
                  <AddProductForm
                    onAdd={(product) => setProducts([...products, product])}
                  />
                  
                
              }
            />
            <Route
              path="/upload-csv"
              element={<CSVUploadForm onProductsUpdated={setProducts} />}
            />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/alerts" element={<Alerts />} />
          {/* </Route> */}
       <Route path="/productlist" element={ <ProductList products={products} setProducts={setProducts} />} />
        </Routes>
      </div>
    
  );
}

export default App;
