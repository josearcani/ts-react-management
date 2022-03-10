import React, { useContext, useEffect } from 'react'
import Widget from '../../components/widget/Widget'
import { AppContextInterface, AuthContext } from '../../services/contexts/AuthContext';
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import { fetchWithToken } from '../../services/helpers/fetch'
import { types } from '../../services/types/types';
import './employees.css';

const Employees = () => {
  const { dash, dispatch } = useContext(DashContext) as DashContextInterface;

  console.log(dash)
  
  useEffect(() => {
    dispatch({ type: 'GETALL', endpoint: 'empleados' });
  }, [])
  

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
        <div className="app__dashboard-item">
          <Widget
            title="Tabla de Empleados"
          >
            {/* <div>
              <form>
                <label>
                  Limite
                  <input type="checkbox" />
                </label>
                <select>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <button>Obtener</button>
              </form>
            </div> */}
            <table className="app__dashboard-table">
              <thead>
                <tr>
                  <th>NOMBRE</th>
                  <th>APELLIDO</th>
                  <th>CORREO</th>
                  <th>ROL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alfreds</td>
                  <td>Franciscog</td>
                  <td>test1@gmail.com</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>Maria</td>
                  <td>Mexica</td>
                  <td>test2@gmail.com</td>
                  <td>Manager</td>
                </tr>
                <tr>
                  <td>German</td>
                  <td>Mendoza</td>
                  <td>test3@gmail.com</td>
                  <td>Trainer</td>
                </tr>
                <tr>
                  <td>Menzo</td>
                  <td>Moctezuma</td>
                  <td>test4@gmail.com</td>
                  <td>Trainer</td>
                </tr>
              </tbody>
            </table>
          </Widget>
        </div>
      </div>
    </div>
  )
}

export default Employees