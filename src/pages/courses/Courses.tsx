import React, { useContext, useEffect } from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import AddNewFab from '../../components/addNewFab/AddNewFab';
import Loader from '../../components/loader/Loader';
import ModalCourse from '../../components/modal/ModalCourse';
import Widget from '../../components/widget/Widget'
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import './courses.css';

const Courses = () => {
  const { dash, dashDispatch } = useContext(DashContext) as DashContextInterface;
  const { crsData }:any = dash;
  const items = crsData.rows;
  useEffect(() => {
    dashDispatch({ type: 'GETCRS', endpoint: 'cursos?limit=1000' });
  }, [])

  if (dash.checking == true || items === undefined ) {
    return (<Loader />)
  }

  return (
    <div className="app__dashboard">
      <AddNewFab title="Nuevo Curso" />
      <h2 style={{ marginBottom: 15 }}>Cursos</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Crear cursos"
          >
            <p>Aqui puedes visualizar y modificar los cursos</p>
          </Widget>
        </div>
      </div>
      {/* <div className="app__dashboard-row"> */}
          {
            items.map((item:any) => {
              const {
                cursoActivo,
                cursoIniciado,
                empleado,
                fechaFin,
                fechaFinDeMatricula,
                fechaIni,
                horasTotales,
                id,
                maxMatriculados,
                minMatriculados,
                nombreCurso
              } = item;
              return (
                <div
                  className="app__dashboard-item"
                  key={ item.id }
                >
                  <Widget title={ nombreCurso }>
                    {
                      cursoActivo
                      ? <span className="app__course-state app__course-state--active">Disponible</span>
                      : <span className="app__course-state app__course-state--inactive">No disponible</span>
                    }
                    <div className="app__course-container">
                      <p>Mínimo de personas: <span>{minMatriculados}</span></p>
                      <p>Máximo de personas: <span>{maxMatriculados}</span></p>
                      <p>Comienza: <span>{fechaIni.split('T')[0]}</span></p>
                      <p>Termina: <span>{fechaFin.split('T')[0]}</span></p>
                      <p>Horas totales: <span>{horasTotales} hrs</span></p>
                    </div>
                    <div className="app__courses-instructor">
                      <p>Instructor: {empleado.nombre} {empleado.apellido}</p>
                    </div>
                    <Link
                      className="app__courses-btn"
                      to={`/admin/cursos/${item.id}/detalles`}
                    >
                      <GiMagnifyingGlass /> <span>Detalles</span> 
                    </Link>
                  </Widget>
                </div>
              )
            })
          }
      {/* </div> */}
      <ModalCourse />
    </div>
  )
}

export default Courses