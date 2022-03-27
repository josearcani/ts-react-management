import React, { useContext, useEffect, useState } from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader, DeleteModal, Widget } from '../../components';
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';

const DetailsCourse = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();  
  const endpoint = location.pathname.split('/')[2];
  const id = location.pathname.split('/')[3];
  const { dash, dashDispatch } = useContext(DashContext) as DashContextInterface;
  const {
    cursoActivo,
    cursoIniciado,
    empleado,
    fechaFin,
    fechaFinDeMatricula,
    fechaIni,
    horasTotales,
    maxMatriculados,
    minMatriculados,
    nombreCurso,
  }:any = dash.activeData;

  useEffect(() => {
    dashDispatch({ type: 'GETONE', endpoint: `${endpoint}/${id}` });
  }, []);

  if (dash.checking == true || empleado === undefined ) {
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
            <p>nombreCurso: {nombreCurso}</p>
            <p>horasTotales: {horasTotales}</p>
            <p>maxMatriculados: {maxMatriculados}</p>
            <p>minMatriculados: {minMatriculados}</p>
            <p>cursoActivo: {JSON.stringify(cursoActivo)}</p>
            <p>cursoIniciado: {JSON.stringify(cursoIniciado)}</p>
            <p>fechaIni: {fechaIni}</p>
            <p>fechaFin: {fechaFin}</p>
            <p>fechaFinDeMatricula: {fechaFinDeMatricula}</p>
            <p>Instructor: {`${empleado.nombre} ${empleado.apellido}`}</p>
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

export default DetailsCourse