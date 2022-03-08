import React from 'react'
import Widget from '../../components/widget/Widget'

const Employees = () => {
  return (
    <div className="app__dashboard">
      <h2 style={{ marginBottom: 15 }}>Empleados</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Empleados"
          >
            <p>Administradores: 1</p>
            <p>Gerentes: 2</p>
            <p>Instructores: 4</p>
            <p>Total: 7</p>
          </Widget>
        </div>
      </div>
      <div className="app__dashboard-row">
        {/* <div className="app__dashboard-item">
        asdasd
      </div>
      <div className="app__dashboard-item">
        asdasd
      </div>
      <div className="app__dashboard-item">
        asdasd
      </div> */}
      </div>
    </div>
  )
}

export default Employees