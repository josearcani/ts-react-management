import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import AuthRouter from './AuthRouter'


const AppRouter:React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/auth/*" element={ <AuthRouter /> } />

          <Route path='/' element={ <Dashboard /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
