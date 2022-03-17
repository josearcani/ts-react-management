import React, { useContext } from 'react'
import ReactModal from 'react-modal';
import { useForm } from '../../hooks/useForm';
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

interface NewCourse {
  nombreCurso: string;
  maxMatriculados: number
  minMatriculados: number
  horasTotales: number
  fechaIni: string
  fechaFin: string
  fechaFinDeMatricula: string
  cursoIniciado: boolean
  cursoActivo: boolean
  trainer: string;
}

const ModalCourse = () => {
  const { dash: { toggle }, dashDispatch } = useContext(DashContext) as DashContextInterface;

  const { handleSubmit, handleChange, data: curso, errors } = useForm<NewCourse>({
    validations: {
      nombreCurso: {
        pattern: {
          value: '^[a-zA-Z].*[\s\.]*$',
          message: "Titulo del curso no válido",
        },
      },
      maxMatriculados: {
        custom: {
          isValid: (value) => Number(value) <= 100,
          message: 'Debe tener un máximo de 100 participantes',
        },
      },
      minMatriculados: {
        custom: {
          isValid: (value) => Number(value) >= 5,
          message: 'Debe tener un minimo de 5 participantes',
        },
      },
      horasTotales: {
        // pattern: {
        //   value: '^[a-zA-Z].*[\s\.]*$',
        //   message: 'Requiere un apellido',
        // },
      },
      fechaIni: {
        // pattern: {
        //   value: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
        //   message:
        //     "Verifica que el correo nuevamente",
        // },
      },
      fechaFin: {

      },
      fechaFinDeMatricula: {

      },
      trainer: {
        pattern: {
          value: '^[a-zA-Z].*[\s\.]*$',
          message: 'Nombre del personañ',
        },
      },
    },
    initialValues: {
      nombreCurso: '',
      maxMatriculados: 10,
      minMatriculados: 5,
      horasTotales: 1,
      fechaIni: '',
      fechaFin: '',
      fechaFinDeMatricula: '',
      cursoIniciado: false,
      cursoActivo: false,
      trainer: '',
    },
    onSubmit: () => {
      dashDispatch({
        type: 'POSTONE',
        nombreCurso: curso.nombreCurso,
        maxMatriculados: curso.maxMatriculados,
        minMatriculados: curso.minMatriculados,
        horasTotales: curso.horasTotales,
        fechaIni: curso.fechaIni,
        fechaFin: curso.fechaFin,
        fechaFinDeMatricula: curso.fechaIni,
        cursoIniciado: false,
        cursoActivo: true,
        trainer: '0de90fdb-b2ee-4885-a490-5e641c7e695a',
      })
      closeModal();
    },
  });

  const closeModal = () => {
    dashDispatch({ type: 'GETCRS', endpoint: 'cursos?limit=1000' });
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
        onSubmit={ handleSubmit }
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
                value={ curso.nombreCurso }
                onChange={handleChange('nombreCurso')}
              />
              <i className="fa fa-envelope"></i>
              {errors.nombreCurso && <span className="app__input--error">{errors.nombreCurso}</span>}
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
                  value={curso.maxMatriculados}
                  onChange={handleChange('maxMatriculados')}
                />
                <i className="fa fa-key"></i>
                {errors.maxMatriculados && <span className="app__input--error">{errors.maxMatriculados}</span>}
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
                  value={curso.minMatriculados}
                  onChange={handleChange('minMatriculados')}
                />
                <i className="fa fa-key"></i>
                {errors.minMatriculados && <span className="app__input--error">{errors.minMatriculados}</span>}
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
                  value={curso.horasTotales}
                  onChange={handleChange('horasTotales')}
                />
                <i className="fa fa-key"></i>
                {errors.horasTotales && <span className="app__input--error">{errors.horasTotales}</span>}
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
                  value={curso.fechaIni}
                  onChange={handleChange('fechaIni')}
                />
                <i className="fa fa-key"></i>
                {errors.fechaIni && <span className="app__input--error">{errors.fechaIni}</span>}
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
                  value={curso.fechaFin}
                  onChange={handleChange('fechaFin')}
                />
                <i className="fa fa-key"></i>
                {errors.fechaFin && <span className="app__input--error">{errors.fechaFin}</span>}
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
                value={curso.trainer}
                onChange={handleChange('trainer')}
              />
              <i className="fa fa-key"></i>
              {errors.trainer && <span className="app__input--error">{errors.trainer}</span>}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="custom__button"
          style={{ marginBottom: '.5rem' }}
        >
          CREAR CURSO
        </button>
      </form>
    </ReactModal>
  )
}

export default ModalCourse