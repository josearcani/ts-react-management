import React, { useContext } from 'react'
import ReactModal from 'react-modal';
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import { types } from '../../services/types/types';

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

const ModalCourse = () => {
  const { dash: { toggle }, dashDispatch } = useContext(DashContext) as DashContextInterface;

  const closeModal = () => {
    dashDispatch({ type: types.dashCloseModal });
  }

  return (
    <ReactModal
      isOpen={toggle}
      onRequestClose={closeModal}
      closeTimeoutMS={100}
      overlayClassName="app__modal-background"
      style={customStyles}
      ariaHideApp={false}
    >
      <form
        className="app__modal-form"
        // onSubmit={handleSubmit}
      >
        <h1>Crear curso</h1>
        <div className="app__input-container">
          <label className="app__input-label" htmlFor="firstname">Nombres</label>
          <input
            type="text"
            id="firstname"
            placeholder="Nombres"
            autoComplete="off"
            className="app__input input"
            name="firstname"
            // value={ user.firstname }
            // onChange={handleChange('firstname')}
          />
          {/* <i className="fa fa-envelope"></i>
          {errors.firstname && <span className="app__input--error">{errors.firstname}</span>} */}
        </div>
        <div className="app__input-container">
          <label className="app__input-label" htmlFor="lastname">Apellidos</label>
          <input
            type="text"
            id="lastname"
            placeholder="Apellidos"
            autoComplete="off"
            className="app__input input"
            name="lasname"
            // value={user.lastname}
            // onChange={handleChange('lastname')}
          />
          {/* <i className="fa fa-key"></i>
          {errors.lastname && <span className="app__input--error">{errors.lastname}</span>} */}
        </div>
        <div className="app__input-container">
          <label className="app__input-label" htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            placeholder="Correo"
            autoComplete="off"
            className="app__input input"
            name="email"
            // value={user.email}
            // onChange={handleChange('email')}
          />
          {/* <i className="fa fa-key"></i>
          {errors.email && <span className="app__input--error">{errors.email}</span>} */}
        </div>
        <div className="app__input-container">
          <label className="app__input-label" htmlFor="password">Contraseña <span>(secret)</span></label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            autoComplete="off"
            className="app__input input"
            name="password"
            // value={user.password}
            // onChange={handleChange('password')}
          />
          {/* <i className="fa fa-key"></i>
          {errors.password && <span className="app__input--error">{errors.password}</span>} */}
        </div>
        <button
          className="custom__button"
          style={{ marginBottom: '.5rem' }}
          type="submit"
        >
          CREAR
        </button>
      </form>
    </ReactModal>
  )
}

export default ModalCourse