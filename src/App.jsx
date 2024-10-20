// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
