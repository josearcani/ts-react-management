import React from 'react'
import { useLocation } from 'react-router-dom';
import Widget from '../../components/widget/Widget'
import { fetchWithToken } from '../../services/helpers/fetch';

const Details = () => {
  const location = useLocation();
  const endpoint = location.pathname.split('/')[2];
  const id = location.pathname.split('/')[3];
  // get one client couse or employee then update or delete
  fetchWithToken(`${endpoint}/${id}`)
  .then(data => console.log(data))
  .catch(e => console.log(e))

  return (
    <div className="app__dashboard">
      <h2 style={{ marginBottom: 15 }}>Detalle</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Empleado | Cliente"
          >
            <p>Nombre: Peter</p>
            <p>Apellido: Parker</p>
            <p>Otros: Datos</p>
          </Widget>
        </div>
      </div>
      {/* <ModalDelete /> */}
      {/* <ModalUpdate /> */}
    </div>
  )
}

export default Details