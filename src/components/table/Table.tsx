import React from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Table = ({ data, isEmployee }:any) => {
  let path:string;
  if (isEmployee){
    path = 'empleados';
  } else {
    path = 'clientes';
  }
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
            <th>N°</th>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>CORREO</th>
            <th>ROL</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {
            data.rows.map((item: any, i:number) => {
              return (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.email}</td>
                  <td>{item.rol}</td>
                  <td><Link to={`/admin/${path}/${item.id}/detalles`}><GiMagnifyingGlass />Detalles</Link></td>
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