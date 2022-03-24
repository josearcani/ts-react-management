import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import Sidebar from '../layouts/sidebar/Sidebar'
import CliCourses from '../pages/cliCourses/CliCourses'
import CliDashboard from '../pages/cliDashboard/CliDashboard'
import Membership from '../pages/membership/Membership'
import Profile from '../pages/profile/Profile'
import Settings from '../pages/settings/Settings'

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
            {/* <Route path='*' element={ <Navigate to="/dashboard" /> }/> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  ) 
}

export default DashboardClientRouter