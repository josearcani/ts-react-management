import React, { useContext, useState } from 'react'
import { RiMenu3Line, RiCloseLine, RiArrowDropDownLine, RiFileUserLine, RiUser3Line, RiTodoLine, RiLogoutBoxLine, RiMessage2Line } from 'react-icons/ri';
import './header.css'
import { AppContextInterface, AuthContext } from '../../services/contexts/AuthContext';
import userImg from "../../assets/images/user.svg";
import { Link } from 'react-router-dom';
import { types } from '../../services/types/types';


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { dispatch } = useContext(AuthContext) as AppContextInterface;

  const toggle = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <div className="app__header">
      <div className="app__header-toggle">
        <RiMenu3Line />
      </div>
      <div className="app__header-menu">
        <div
          className="app__header-user_container"
          onClick={ () => toggle() }
        >
          <div className='app__header-user_avatar'>
            <img src={ userImg } alt="user" />
          </div>
          <p className="app__header-user_text">Pepe Toño</p>
          <RiArrowDropDownLine style={{fontSize: 30}} />
        </div>
        {
          toggleMenu && (
            <div className="app__header-menu_container">
              <Link to="/dashboard">
                <div className="dropdown-item">
                    <RiUser3Line />
                    <span>Perfil</span>
                </div>
              </Link>
              <Link to="/dashboard">
                <div className="dropdown-item">
                  <RiTodoLine />
                  <span>Cursos</span>
                </div>
              </Link>
              <Link to="/dashboard">
                <div className="dropdown-item">
                  <RiMessage2Line />
                  <span>Mensajes</span>
                </div>
              </Link>
              <div
                className="dropdown-item"
                onClick={ handleLogout }
              >
                <RiLogoutBoxLine />
                <span>Salir</span>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Header