import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const ProtectedRoute = ({ children, requiredRole }) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const tokenResult = await user.getIdTokenResult();
          setUserRole(tokenResult.claims.role);
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
      } finally {
        setLoading(false);
      }
    };
    
    checkUserRole();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userRole === requiredRole) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;



