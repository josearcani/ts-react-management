import React, { useContext } from 'react'
import ReactModal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

const DeleteModal = ({ openModal, setOpenModal }:{ openModal:boolean, setOpenModal: Function }) => {

  const { dashDispatch } = useContext(DashContext) as DashContextInterface;

  const location = useLocation();
  const endpoint = location.pathname.split('/')[2];
  const id = location.pathname.split('/')[3];
  const navigate = useNavigate();  

  const closeModal = () => {
    setOpenModal(false);
  }

  const deleteResourse = () => {
    dashDispatch({ type: 'DELETEONE', endpoint:`${endpoint}/${id}`});
    closeModal();
    navigate( -1 );
  }

  return (
    <ReactModal
      isOpen={openModal}
      onRequestClose={closeModal}
      closeTimeoutMS={100}
      overlayClassName="app__modal-background"
      style={customStyles}
      ariaHideApp={false}
    >
      <h3>Estas seguro que deseas eliminar este recurso?</h3>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem'}}>
        <button
          className="custom__button danger"
          onClick={ deleteResourse }
        >Eliminar</button>
        <button
          className="custom__button"
          onClick={ closeModal }
        >Cancelar</button>
      </div>
    </ReactModal>
  )
}

export default DeleteModal