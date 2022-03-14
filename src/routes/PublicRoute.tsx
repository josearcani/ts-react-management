import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContextInterface, AuthContext } from '../services/contexts/AuthContext'

type AuthContextProviderProps = {
  children: React.ReactNode
}
const PublicRoute = ({ children }: AuthContextProviderProps):any => {
  const { user } = useContext(AuthContext) as AppContextInterface;
  let home:string;
  if (user.rol === 'CLIENTE') {
    home = '/cliente';
  } else {
    home = '/admin';
  }
  return !user.logged
    ? children
    : <Navigate to={ home } />
}

export default PublicRoute