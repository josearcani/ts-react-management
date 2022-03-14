import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiArrowDropDownLine, RiUser3Line, RiTodoLine, RiLogoutBoxLine, RiMessage2Line } from 'react-icons/ri';
import { AppContextInterface, AuthContext } from '../../services/contexts/AuthContext';
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import userImg from "../../assets/images/user.svg";
import { types } from '../../services/types/types';
import './header.css'

const Header:React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { authDispatch, user } = useContext(AuthContext) as AppContextInterface;
  const { dashDispatch } = useContext(DashContext) as DashContextInterface;
  let home:string;
  if (user.rol === 'CLIENTE') {
    home = '/cliente'
  } else {
    home = '/admin'
  }
  const toggle = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleLogout = () => {
    dashDispatch({ type: types.dashClearData });
    authDispatch({ type: 'LOGOUT' });
  }

  return (
    <div className="app__header">
      <div className="app__header-toggle">
        <RiMenu3Line />
      </div>
      <div className="app__header-toggle">
        <span>{user.rol}</span>
      </div>
      <div className="app__header-menu">
        <div
          className="app__header-user_container"
          onClick={ () => toggle() }
        >
          <div className='app__header-user_avatar'>
            <img src={ userImg } alt="user" />
          </div>
          <p className="app__header-user_text">{`${user.nombre} ${user.apellido}`}</p>
          <RiArrowDropDownLine style={{fontSize: 30}} />
        </div>
        {
          toggleMenu && (
            <div className="app__header-menu_container">
              <Link to={`${ home }/${ user.id }`}>
                <div className="dropdown-item">
                    <RiUser3Line />
                    <span>Perfil</span>
                </div>
              </Link>
              <Link to={`${ home }/${ user.id }/cursos`}>
                <div className="dropdown-item">
                  <RiTodoLine />
                  <span>Cursos</span>
                </div>
              </Link>
              <Link to={`${ home }/${ user.id }/mensajes`}>
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