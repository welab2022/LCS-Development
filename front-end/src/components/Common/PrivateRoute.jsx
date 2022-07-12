import React from 'react';
import {Navigate, Route} from 'react-router-dom';

 const PrivateRoute = ({children}) => {

  const isLoggedIn = Boolean(localStorage.getItem('user'))
  if(!isLoggedIn) return <Navigate to="/login"/>
  return children
}
export default PrivateRoute