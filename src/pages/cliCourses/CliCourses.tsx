import React, { useContext, useEffect } from 'react'
import Loader from '../../components/loader/Loader';
import Widget from '../../components/widget/Widget';
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';

const CliCourses = () => {
  const { dash, dashDispatch } = useContext(DashContext) as DashContextInterface;
  const { crsData }: any = dash;
  const items = crsData.rows;
  useEffect(() => {
    dashDispatch({ type: 'GETCRS', endpoint: 'cursos?limit=1000' });
  }, [])

  if (dash.checking == true || items === undefined) {
    return (<Loader />)
  }

  console.log(crsData);
  return (
    <div className="app__dashboard">
      {/* <AddNewFab title="Nuevo Curso" /> */}
      <h2 style={{ marginBottom: 15 }}>Cursos</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Cursos disponibles"
          >
            <p>Aquí puedes explorar los cursos que tenemos disponibles</p>
          </Widget>
        </div>
      </div>
      {
        items.map((item: any) => {
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
              key={item.id}
            >
              <Widget title={nombreCurso}>
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
                <button>
                  Inscribirse
                </button>
              </Widget>
            </div>
          )
        })
      }
    </div>
  )
}

export default CliCourses