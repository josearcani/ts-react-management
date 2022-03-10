import React from 'react'
import { Link } from 'react-router-dom'

const Table = ({ data }:any) => {
  return (
    <>
      {/* <div>
        <form>
          <label>
            Limite de papus
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
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {
            data.rows.map((item: any) => {
              return (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.email}</td>
                  <td>{item.rol}</td>
                  <td><Link to={`dashboard/${item.id}/detalle`}>edit</Link></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Table