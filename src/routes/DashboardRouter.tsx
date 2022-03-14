import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import Sidebar from '../layouts/sidebar/Sidebar'
import Clients from '../pages/clients/Clients'
import Courses from '../pages/courses/Courses'
import Dashboard from '../pages/dashboard/Dashboard'
import Employees from '../pages/employees/Employees'
import Membership from '../pages/membership/Membership'
import Profile from '../pages/profile/Profile'
import Settings from '../pages/settings/Settings'
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
            <Route path='/:id' element={ <Profile /> }/>
            <Route path='/:id/cursos' element={ <Profile /> }/>
            <Route path='/:id/mensajes' element={ <Profile /> }/>
            <Route path='/empleados' element={ <Employees /> }/>
            <Route path='/clientes' element={ <Clients /> }/>
            <Route path='/cursos' element={ <Courses /> }/>
            <Route path='/membresias' element={ <Membership /> }/>
            <Route path='/configuracion' element={ <Settings /> }/>
            <Route path='*' element={ <Navigate to="/admin" /> }/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  ) 
}

export default DashboardRouter