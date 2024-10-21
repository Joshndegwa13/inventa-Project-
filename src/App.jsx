import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/Forgotpassword";
import HomePage from "./Components/HomePage";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Reports from "./Components/Reports";
import SalesPage from "./Components/SalesPage";
import PaymentPage from "./Components/PaymentPage";
import ProductList from "./Components/ProductList";
import AddProductForm from "./Components/AddProductForm";

import React, { useState } from "react";
import CSVUploadForm from "./Components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <Routes>
      <Route
        path="/add-product"
        element={
          <>
            <AddProductForm
              onAdd={(product) => setProducts([...products, product])}
            />
            <ProductList products={products} setProducts={setProducts} />
          </>
        }
      />
      <Route
        path="/upload-csv"
        element={<CSVUploadForm onProductsUpdated={setProducts} />}
      />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/payment" element={<PaymentPage />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
