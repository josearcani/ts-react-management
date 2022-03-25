import React, { useContext, useEffect } from 'react'
import Widget from '../../components/widget/Widget'
import { AppContextInterface, AuthContext } from '../../services/contexts/AuthContext';

import userImg from "../../assets/images/user.svg";
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import Loader from '../../components/loader/Loader';
const CliDashboard = () => {

  const { authDispatch, user } = useContext(AuthContext) as AppContextInterface;
  const { dash, dashDispatch } = useContext(DashContext) as DashContextInterface;

  useEffect(() => {
    dashDispatch({ type: 'GETONE', endpoint: `clientes/${user.nombre}/cursos` });
  }, [])
  
  if (dash.checking == true || Object.keys(dash.activeData).length === 0 ) {
    return (<Loader />)
  }

  const { cursos }:any = dash.activeData;
  return (
    <div className="app__dashboard">
      <h2 style={{ marginBottom: 15 }}>Dashboard</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title={`${user.nombre} ${user.apellido}`}
          >
            <div
              className="app__widget-user"
            >
              <div className="app__widget-user_avatar">
                <img src={ userImg } alt="user" />
              </div>
              <div className="app__widget-user-container">
                <p className="app__widget-user_text">{user.email}</p>
              </div>
            </div>
          </Widget>
        </div>
      </div>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Mis cursos"
          >
            <div className="app__dashboard-row">
              {
                cursos.map((curso:any) => (
                  <div key={curso.id}>
                    <p>Título: <span>{curso.nombreCurso}</span></p>
                    <p>Fecha de inicio: <span>{curso.fechaIni}</span></p>
                    <p>Fecha fin: <span>{curso.fechaFin}</span></p>
                    <p>
                      {
                        curso.cursoIniciado
                        ? <span>Iniciado</span>
                        : <span>No Iniciado</span>
                      }
                    </p>
                  </div>
                ))
              }
            </div>
            <p>Tienes <span>{ cursos.length } cursos</span></p>
          </Widget>
        </div>
        <div className="app__dashboard-item">
          <Widget
            title="Mi actividad"
          >
            Char about my daily acctivity
          </Widget>
        </div>
      </div>
      
    </div>
  )
}

export default CliDashboard