import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContextInterface, AuthContext } from '../services/contexts/AuthContext'
import AuthRouter from './AuthRouter'
import DashboardRouter from './DashboardRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


const AppRouter:React.FC = () => {

  const { user, verifyToken } = useContext(AuthContext) as AppContextInterface;

  useEffect(() => {
    verifyToken()
  }, [verifyToken])
  
  if (user.checking) {
    return <h1>Cargando</h1>
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/auth/*" element={
            <PublicRoute>
              <AuthRouter />
            </PublicRoute>
          }
          />
          <Route path="/*" element={
            <PrivateRoute>
              <DashboardRouter />
            </PrivateRoute>
          }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
