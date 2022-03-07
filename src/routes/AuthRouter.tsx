import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

const AuthRouter:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/registro' element={ <Register /> }/>
      </Routes>
    </>
  )
}

export default AuthRouter