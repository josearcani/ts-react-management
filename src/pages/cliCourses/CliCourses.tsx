import React from 'react'
import Widget from '../../components/widget/Widget';

const CliCourses = () => {
  return (
    <div className="app__dashboard">
      {/* <AddNewFab title="Nuevo Curso" /> */}
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
      <div
        className="app__dashboard-item"
      >
        <Widget title="12341234">
          <span className="app__course-state app__course-state--active">Disponible</span>
          <div className="app__course-container">
            <p>Mínimo de personas: </p>
          </div>
        </Widget>
      </div>
      {/* </div> */}
    </div>
  )
}

export default CliCourses