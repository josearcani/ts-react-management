import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import Error from '../pages/error/Error'
import Landing from '../pages/landing/Landing'
import { AppContextInterface, AuthContext } from '../services/contexts/AuthContext'
import AuthRouter from './AuthRouter'
import DashboardClientRouter from './DashboardClientRouter'
import DashboardRouter from './DashboardRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


const AppRouter:React.FC = () => {

  const { user, verifyToken } = useContext(AuthContext) as AppContextInterface;
  // console.log(user.checking);
  useEffect(() => {
    verifyToken()
  }, [verifyToken])
  
  if (user.checking) {
    return <Loader />
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
          <Route path="/error" element={ <Error /> }/>
          <Route path="/admin/*" element={
            <PrivateRoute>
              <DashboardRouter />
            </PrivateRoute>
          }
          />
          <Route path="/cliente/*" element={
            <PrivateRoute>
              <DashboardClientRouter />
            </PrivateRoute>
          }
          />
        <Route path='*' element={ <Navigate to="/auth/login" /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
