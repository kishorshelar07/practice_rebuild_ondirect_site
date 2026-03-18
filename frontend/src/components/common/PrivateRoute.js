import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('od_admin_token');
  return token ? children : <Navigate to="/admin/login" replace />;
};

export default PrivateRoute;
