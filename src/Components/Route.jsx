import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'; 
import AdminPage from './AdminPage'; 
import NormalPage from './NormalPage';

function AppRoutes() {
  const [userRole, setUserRole] = useState('user');  // Manage user role state

  return (
    <Routes>
      <Route path="/normal" element={<NormalPage />} />
      <Route path="/admin" element={<ProtectedRoute role={userRole} allowedRole="superuser"><AdminPage /></ProtectedRoute>} />
      <Route path="/not-authorized" element={<div>You are not authorized to access this page.</div>} />
    </Routes>
  );
}

export default AppRoutes;
