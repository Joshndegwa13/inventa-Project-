import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'; 
import Alerts from './Alerts';
// import StockForm from './StockForm';
import Register from './Register';
import AdminPage from './AdminPage'; 
import NormalPage from './NormalPage'; 

function App() {

  const [userRole, setUserRole] = useState('user'); 

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="text-center text-3xl font-bold text-blue-700 mb-6">Stock & Order Management</h1>
          <Alerts />
          {/* <StockForm /> */}
          <Register />
        </header>

        <Routes>
          {/* Normal route for all users */}
          <Route path="/normal" element={<NormalPage />} />

          {/* Protected route for superusers */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role={userRole} allowedRole="superuser">
                <AdminPage />
              </ProtectedRoute>
            }
          />

          {/* Not authorized page */}
          <Route path="/not-authorized" element={<div>You are not authorized to access this page.</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
