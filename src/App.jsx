import React from 'react';
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
import Products from "./Components/Products";
import Alerts from './Components/Alerts';
const App = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/pricing" element={<PaymentPage />} />
      <Route path='alerts' element={<Alerts />} />
    </Routes>
    );
};


export default App;
