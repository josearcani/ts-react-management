import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

const AuthRouter:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/registro' element={ <Register /> }/>
        <Route path='*' element={ <Navigate to="/auth/login" /> }/>
      </Routes>
    </>
  )
}

export default AuthRouter