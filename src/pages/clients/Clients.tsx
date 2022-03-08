import React from 'react'
import Widget from '../../components/widget/Widget'

const Clients = () => {
  return (
    <div className="app__dashboard">
      <h2 style={{ marginBottom: 15 }}>Clientes</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Clientes"
          >
            <p>Hombres: 1</p>
            <p>Mujeres: 4</p>
            <p>No binarios: 4</p>
            <p>Total: 7</p>
          </Widget>
        </div>
      </div>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Tabla de Clientes"
          >
            <table className="app__dashboard-table">
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Rol</th>
              </tr>
              <tr>
                <td>Alfreds</td>
                <td>Maria</td>
                <td>German</td>
                <td>Menzo</td>
              </tr>
              <tr>
                <td>Moctezuma</td>
                <td>Franciscog</td>
                <td>Mexica</td>
                <td>Mendoza</td>
              </tr>
              <tr>
                <td>test1@gmail.com</td>
                <td>test2@gmail.com</td>
                <td>test3@gmail.com</td>
                <td>test4@gmail.com</td>
              </tr>
              <tr>
                <td>Admin</td>
                <td>Manager</td>
                <td>Trainer</td>
                <td>Trainer</td>
              </tr>
            </table>
          </Widget>
        </div>
      </div>
    </div>
  )
}

export default Clients