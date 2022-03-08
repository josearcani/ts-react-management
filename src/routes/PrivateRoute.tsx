import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContextInterface, AuthContext } from '../services/contexts/AuthContext'

type AuthContextProviderProps = {
  children: React.ReactNode
}
const PrivateRoute = ({ children }: AuthContextProviderProps):any => {
  const { user } = useContext(AuthContext) as AppContextInterface;
  return user.logged
    ? children
    : <Navigate to="/auth/login" />
}

export default PrivateRoute