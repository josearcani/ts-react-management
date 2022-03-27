import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Header, Sidebar } from '../layouts'
import { Clients, Courses, Dashboard, Details, DetailsCourse, Employees, Membership, Profile, Settings } from '../pages'
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
            <Route path='/empleados/:id/detalles' element={ <Details /> }/>
            <Route path='/clientes/:id/detalles' element={ <Details /> }/>
            <Route path='/empleados' element={ <Employees /> }/>
            <Route path='/clientes' element={ <Clients /> }/>
            <Route path='/cursos' element={ <Courses /> }/>
            <Route path='/cursos/:id/detalles' element={ <DetailsCourse /> }/>
            <Route path='/membresias' element={ <Membership /> }/>
            <Route path='/configuracion' element={ <Settings /> }/>
            <Route path='*' element={ <Navigate to="/auth/login" /> }/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  ) 
}

export default DashboardRouter