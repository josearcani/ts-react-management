import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Error from '../pages/error/Error'
import Landing from '../pages/landing/Landing'
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
          <Route path="/" element={ <Landing /> }/>
          <Route path="/error" element={ <Error /> }/>
          <Route path="/dashboard/*" element={
            <PrivateRoute>
              <DashboardRouter />
            </PrivateRoute>
          }
          />
        <Route path='*' element={ <Navigate to="/error" /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
