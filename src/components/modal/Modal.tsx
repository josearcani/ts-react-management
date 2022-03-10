import React, { useContext } from 'react'
import ReactModal from 'react-modal';
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import { types } from '../../services/types/types';
import './modal.css'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Modal = () => {

  const { dash: { toggle }, dispatch } = useContext(DashContext) as DashContextInterface;

  const closeModal = () => {
    dispatch({ type: types.dashCloseModal });
  }

  return (
    <ReactModal
      isOpen={ toggle }
      onRequestClose={ closeModal }
      closeTimeoutMS={ 100 }
      overlayClassName="app__modal-background"
      style={ customStyles }
      ariaHideApp={ false }
    >
      <form className="app__modal-form">
        <h1>Añadir empleado o cliente :P</h1>
        <button>Hello this is a modal</button>
      </form>
    </ReactModal>
  )
}

export default Modal