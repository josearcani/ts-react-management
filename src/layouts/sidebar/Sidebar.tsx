import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="app__navbar">
      <header>
        <span>logo</span>
      </header>
      <ul>
        <li>Dashboard</li>
        <li>Otros</li>
        <li>Ctusos</li>
        <li>Actividades</li>
      </ul>
    </div>
  )
}

export default Sidebar