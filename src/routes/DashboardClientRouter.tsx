import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Header, Sidebar } from '../layouts'
import { CliDashboard, CliCourses, Membership, Profile, Settings } from '../pages'

const DashboardClientRouter: React.FC = () => {
  return (
    <div className="dashboard__root">
      <div className="dashboard__root--wrap">
        <Header />
        <Sidebar />
        <main className="dashboard__content">
          <Routes>
            <Route path='/' element={ <CliDashboard /> }/>
            <Route path='/:id' element={ <Profile /> }/>
            <Route path='/cursos' element={ <CliCourses /> }/>
            <Route path='/:id/mensajes' element={ <Profile /> }/>
            <Route path='/membresias' element={ <Membership /> }/>
            <Route path='/configuracion' element={ <Settings /> }/>
            <Route path='*' element={ <Navigate to="/cliente" /> }/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  ) 
}

export default DashboardClientRouter