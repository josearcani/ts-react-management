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

  // nombreCurso
  // fechaIni
  // fechaFin
  // fechaFinDeMatricula
  // maxMatriculados
  // minMatriculados
  // cursoIniciado => false
  // cursoActivo => false
  // horasTotales
  // trainer

  // const handleSubmit = (e) => {
  //   e.preventDefault;
  // }

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
        // onSubmit={ () => console.log("Submit") }
      >
        <h1>Crear curso</h1>
        <div className="app__modal-container">
          <div className="app__modal-row">
            <div className="app__input-container">
              <label className="app__input-label" htmlFor="nombreCurso">Nombre del curso</label>
              <input
                type="text"
                id="nombreCurso"
                placeholder="Nombre del curso"
                autoComplete="off"
                className="app__input input"
                name="nombreCurso"
              // value={ user.firstname }
              // onChange={handleChange('firstname')}
              />
              {/* <i className="fa fa-envelope"></i>
            {errors.firstname && <span className="app__input--error">{errors.firstname}</span>} */}
            </div>
            <div className='app__input-section'>
              <div className="app__input-container">
                <label className="app__input-label" htmlFor="maxMatriculados">Participantes</label>
                <input
                  type="number"
                  id="maxMatriculados"
                  placeholder="Max"
                  autoComplete="off"
                  className="app__input input"
                  name="maxMatriculados"
                // value={user.lastname}
                // onChange={handleChange('lastname')}
                />
                {/* <i className="fa fa-key"></i>
              {errors.lastname && <span className="app__input--error">{errors.lastname}</span>} */}
              </div>
              <div className="app__input-container">
                <label className="app__input-label" htmlFor="minMatriculados">Participantes</label>
                <input
                  type="number"
                  id="minMatriculados"
                  placeholder="Min"
                  autoComplete="off"
                  className="app__input input"
                  name="minMatriculados"
                // value={user.email}
                // onChange={handleChange('email')}
                />
                {/* <i className="fa fa-key"></i>
              {errors.email && <span className="app__input--error">{errors.email}</span>} */}
              </div>
              <div className="app__input-container">
                <label className="app__input-label" htmlFor="horasTotales">Horas Totales</label>
                <input
                  type="number"
                  id="horasTotales"
                  placeholder="Horas totales"
                  autoComplete="off"
                  className="app__input input"
                  name="horasTotales"
                // value={user.email}
                // onChange={handleChange('email')}
                />
                {/* <i className="fa fa-key"></i>
              {errors.email && <span className="app__input--error">{errors.email}</span>} */}
              </div>
            </div>
            <div className='app__input-section'>
              <div className="app__input-container">
                <label className="app__input-label" htmlFor="fechaIni">Fecha Inicio</label>
                <input
                  type="datetime-local"
                  id="fechaIni"
                  placeholder="Inicio"
                  autoComplete="off"
                  className="app__input input"
                  name="fechaIni"
                // value={user.password}
                // onChange={handleChange('password')}
                />
                {/* <i className="fa fa-key"></i>
              {errors.password && <span className="app__input--error">{errors.password}</span>} */}
              </div>
              <div className="app__input-container">
                <label className="app__input-label" htmlFor="fechaFin">Fecha Fin</label>
                <input
                  type="datetime-local"
                  id="fechaFin"
                  placeholder="Final"
                  autoComplete="off"
                  className="app__input input"
                  name="fechaFin"
                // value={user.password}
                // onChange={handleChange('password')}
                />
                {/* <i className="fa fa-key"></i>
                {errors.password && <span className="app__input--error">{errors.password}</span>} */}
              </div>
            </div>
            <div className="app__input-container">
              <label className="app__input-label" htmlFor="trainer">Entrenador</label>
              <input
                type="text"
                id="trainer"
                placeholder="Entrenador"
                autoComplete="off"
                className="app__input input"
                name="trainer"
              // value={user.password}
              // onChange={handleChange('password')}
              />
              {/* <i className="fa fa-key"></i>
            {errors.password && <span className="app__input--error">{errors.password}</span>} */}
            </div>
          </div>
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