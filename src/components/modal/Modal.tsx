import { useContext, useState } from 'react'
import ReactModal from 'react-modal';
import { useForm } from '../../hooks/useForm';
import { AppContextInterface, AuthContext } from '../../services/contexts/AuthContext';
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

type Roles = 'ADMIN_ROL' | 'MANAGER_ROL' | 'TRAINER_ROL' | 'VENTAS_ROL';

interface Employee {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Modal = ({ isEmployee }:{ isEmployee:boolean }) => {

  const { dash: { toggle }, dashDispatch } = useContext(DashContext) as DashContextInterface;
  const { user:userAuth, authDispatch } = useContext(AuthContext) as AppContextInterface;
  const [ role, setRole ] = useState<Roles>('VENTAS_ROL');
  let isAdmin = false;
  if (userAuth.rol == 'ADMIN') {
    isAdmin = true
  }

  const { handleSubmit, handleChange, data: user, errors } = useForm<Employee>({
    validations: {
      firstname: {
        pattern: {
          value: '^[a-zA-Z].*[\s\.]*$',
          message: "Require un nombre",
        },
      },
      lastname: {
        pattern: {
          value: '^[a-zA-Z].*[\s\.]*$',
          message: 'Requiere un apellido',
        },
      },
      email: {
        pattern: {
          value: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
          message:
            "Verifica que el correo nuevamente",
        },
      },
      password: {
        custom: {
          isValid: (value) => value.length >= 6,
          message: 'La contraseña necesita ser de al menos 6 characteres',
        },
      },
    },
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    onSubmit: () => {
      if (isEmployee){
        authDispatch({
          type: 'REGISTER-EMPLOYEE',
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          password: user.password,
          rol: role
        })
      } else {
        authDispatch({
          type: 'REGISTER-CLIENT',
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          password: user.password,
        })
      }
      closeModal();
    },
  });

  const closeModal = () => {
    dashDispatch({ type: types.dashCloseModal });
  }

  const rolChange = (e:any) => {
    setRole(e.target.value);
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
        onSubmit={handleSubmit}
      >
        {
          isEmployee
          ? (<h1>Añadir empleado</h1>)
          : (<h1>Añadir cliente</h1>)
        }
        <div className="app__input-container">
          <label className="app__input-label" htmlFor="firstname">Nombres</label>
          <input
            type="text"
            id="firstname"
            placeholder="Nombres"
            autoComplete="off"
            className="app__input input"
            name="firstname"
            value={ user.firstname }
            onChange={handleChange('firstname')}
          />
          <i className="fa fa-envelope"></i>
          {errors.firstname && <span className="app__input--error">{errors.firstname}</span>}
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
            value={user.lastname}
            onChange={handleChange('lastname')}
          />
          <i className="fa fa-key"></i>
          {errors.lastname && <span className="app__input--error">{errors.lastname}</span>}
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
            value={user.email}
            onChange={handleChange('email')}
          />
          <i className="fa fa-key"></i>
          {errors.email && <span className="app__input--error">{errors.email}</span>}
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
            value={user.password}
            onChange={handleChange('password')}
          />
          <i className="fa fa-key"></i>
          {errors.password && <span className="app__input--error">{errors.password}</span>}
        </div>
        {
          isEmployee && (
            <div className="app__input-container">
              <label className="app__input-label" htmlFor="rol">Rol</label>
              <select name="rol" id="rol" onChange={ rolChange } value={ role }>
                { isAdmin && (<option value="ADMIN_ROL">Admin</option>)}
                { isAdmin && (<option value="MANAGER_ROL">Manager</option>)}
                <option value="TRAINER_ROL">Trainer</option>
                <option value="VENTAS_ROL">Ventas</option>
              </select>
            </div>
          )
        }
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

export default Modal