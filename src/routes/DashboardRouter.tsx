import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'

const DashboardRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={ <Dashboard /> }/>
        <Route path='/' element={ <Dashboard /> }/>
      </Routes>
    </>
  )
}

export default DashboardRouter