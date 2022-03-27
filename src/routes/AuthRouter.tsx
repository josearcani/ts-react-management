import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, Register } from '../pages'

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