import React from 'react'
import Widget from '../../components/widget/Widget'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className="app__dashboard">
      <h2 style={{ marginBottom: 15 }}>Dashboard</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Total de empleados"
          >
            <p>Administradores: 1</p>
            <p>Gerentes: 2</p>
            <p>Instructores: 4</p>
            <p>Total: 7</p>
          </Widget>
        </div>
        <div className="app__dashboard-item">
          <Widget
            title="Total de clientes"
          >
            <p>Varones 5</p>
            <p>Mujeres 5</p>
            <p>No binarios 5</p>
            <p>Total 15</p>
          </Widget>
        </div>
        <div className="app__dashboard-item">
          <Widget
            title="Total de Cursos"
          >
            <p>Activos 2</p>
            <p>Inactivos 1</p>
            <p>Total 3</p>
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

export default Dashboard