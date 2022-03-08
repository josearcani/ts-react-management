import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import Sidebar from '../layouts/sidebar/Sidebar'
import Clients from '../pages/clients/Clients'
import Dashboard from '../pages/dashboard/Dashboard'
import Employees from '../pages/employees/Employees'
import Membership from '../pages/membership/Membership'
import './DashboardRouter.css'

const DashboardRouter: React.FC = () => {
  return (
    <div className="dashboard__root">
      <div className="dashboard__root--wrap">
        <Header />
        <Sidebar />
        <main className="dashboard__content">
          <Routes>
            <Route path='/' element={ <Dashboard /> }/>
            <Route path='/empleados' element={ <Employees /> }/>
            <Route path='/clientes' element={ <Clients /> }/>
            <Route path='/membresias' element={ <Membership /> }/>
            <Route path='/configuracion' element={ <Dashboard /> }/>

            <Route path='*' element={ <Navigate to="/dashboard" /> }/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  ) 
}

export default DashboardRouter