import React, { useContext, useEffect, useState } from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import DeleteModal from '../../components/modal/DeleteModal';
import Widget from '../../components/widget/Widget'
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';

const Details = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();  
  const endpoint = location.pathname.split('/')[2];
  const id = location.pathname.split('/')[3];
  const { dash, dashDispatch } = useContext(DashContext) as DashContextInterface;
  const { nombre, apellido, email, estado, rol, createdAt }:any = dash.activeData;

  useEffect(() => {
    dashDispatch({ type: 'GETONE', endpoint: `${endpoint}/${id}` });
  }, []);

  if (dash.checking == true || dash.activeData === undefined ) {
    return (<Loader />)
  }

  return (
    <div className="app__dashboard">
      <h2 style={{ marginBottom: 15 }}>Detalle</h2>
      <button
      className="app__fab"
      onClick={ () => navigate(-1)}
      ><RiArrowGoBackFill />
      </button>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title={ endpoint.toLocaleUpperCase() }
          >
            <p>Nombre: { nombre }</p>
            <p>Apellido: { apellido }</p>
            <p>Correo: { email }</p>
            <p>Estado: { estado? <span>Activo</span>: <span>Inactivo</span> }</p>
            <p>Rol: { rol }</p>
            <p>Creado: { createdAt }</p>
            <button
              className="custom__button danger"
              onClick={() => setOpenModal(true) }
            >Eliminar</button>
          </Widget>
        </div>
      </div>
      <DeleteModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}

export default Details