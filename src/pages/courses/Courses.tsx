import React, { useContext, useEffect } from 'react'
import { RiRefreshLine } from 'react-icons/ri';
import Loader from '../../components/loader/Loader';
import Widget from '../../components/widget/Widget'
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import './courses.css';

const Courses = () => {


  const { dash, dashDispatch } = useContext(DashContext) as DashContextInterface;
  const { crsData }:any = dash;
  const items = crsData.rows;
  console.log(crsData);
  useEffect(() => {
    dashDispatch({ type: 'GETCRS', endpoint: 'cursos?limit=1000' });
  }, [])

  if (dash.checking == true || items === undefined ) {
    return (<Loader />)
  }


  return (
    <div className="app__dashboard">
      {/* <AddNewFab isEmployee={ false }/> */}
      <h2 style={{ marginBottom: 15 }}>Cursos</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Crear cursos"
          >
            <p>Aqui puedes crear cursos</p>
          </Widget>
        </div>
      </div>
      <div className="app__dashboard-row">
          {
            items.map((item:any) => (
              <div
                className="app__dashboard-item"
                key={ item.id }
              >
                <Widget title={ item.nombreCurso }>
                  {
                    item.cursoActivo
                    ? <span className="app__course-state app__course-state--active">Disponible</span>
                    : <span className="app__course-state app__course-state--inactive">No disponible</span>
                  }
                  <div className="app__course-container">
                    <p>Mínimo de personas: <span>{item.minMatriculados}</span></p>
                    <p>Máximo de personas: <span>{item.maxMatriculados}</span></p>
                    <p>Comienza: <span>{item.fechaIni.split('T')[0]}</span></p>
                    <p>Termina: <span>{item.fechaFin.split('T')[0]}</span></p>
                    <p>Horas totales: <span>{item.horasTotales} hrs</span></p>
                  </div>
                  <div className="app__courses-instructor">
                    <p>Instructor: {item.empleado.nombre} {item.empleado.apellido}</p>
                  </div>
                  <button
                    className="app__courses-btn"
                  >
                    <RiRefreshLine /> <span>Actualizar</span> 
                  </button>
                </Widget>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Courses