import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import Sidebar from '../layouts/sidebar/Sidebar'
import Dashboard from '../pages/dashboard/Dashboard'
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

            <Route path='*' element={ <Navigate to="/error" /> }/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  ) 
}

export default DashboardRouter