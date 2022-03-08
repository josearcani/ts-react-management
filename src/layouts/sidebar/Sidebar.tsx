import React from 'react'
import { RiFolderUserLine, RiHome2Line, RiSettings3Line, RiUserStarFill, RiVipCrown2Line } from 'react-icons/ri'
import { CgGym } from "react-icons/cg";
import LinksGroup from './linksGroup/LinksGroup'
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="app__navbar">
        <Link to="/dashboard">
      <header className="app__navbar-logo">
          <CgGym style={{ fontSize: 60 }} />
          <span className="app__navbar-title">ADMINSYS</span>
      </header>
        </Link>
      <ul className="app__navbar-list">
        <LinksGroup
          link="/dashboard"
          iconName={ <RiHome2Line /> }
          activeItem=""
          isHeader
          index="dashboard"
          header="Dashboard"
        />
        <LinksGroup
          link="/dashboard/empleados"
          iconName={ <RiUserStarFill /> }
          activeItem=""
          isHeader
          index="employees"
          header="Empleados"
          />
        <LinksGroup
          link="/dashboard/clientes"
          iconName={ <RiFolderUserLine /> }
          activeItem=""
          isHeader
          index="clients"
          header="Lista de clientes"
        />
        <LinksGroup
          link="/dashboard/membresias"
          iconName={ <RiVipCrown2Line /> }
          activeItem=""
          isHeader
          index="membership"
          header="Membresias"
        />
        <LinksGroup
          link="/dashboard/configuracion"
          iconName={ <RiSettings3Line /> }
          activeItem=""
          isHeader
          index="settings"
          header="Configuración"
        />
      </ul>
      <div>
        widget
      </div>
    </div>
  )
}

export default Sidebar