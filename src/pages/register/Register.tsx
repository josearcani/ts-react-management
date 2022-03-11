import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { AppContextInterface, AuthContext } from '../../services/contexts/AuthContext';

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Register:React.FC = () => {
  const { dispatch } = useContext(AuthContext) as AppContextInterface;
  const { handleSubmit, handleChange, data: user, errors } = useForm<User>({
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
      firstname: 'Bruno Isaias',
      lastname: 'Diaz Batman',
      email: 'bruno@test.com',
      password: '',
    },
    onSubmit: () => {
      dispatch({
        type: 'REGISTER',
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password
      })
    }
  });

  return (
    <div className="app__login">
      <h1 className="app__title">Regitro</h1>
      <div className="underline" />
      <form onSubmit={ handleSubmit } className="app__form slide-bottom">
        <div className="app__input-container">
          <label className="app__input-label" htmlFor="firstname">Nombre:</label>
          <input
            type="text"
            id="firstname"
            placeholder="Nombre"
            autoComplete="off"
            className="app__input input"
            name="firstname"
            value={ user.firstname }
            onChange={ handleChange('firstname') }
          />
          <i className="fa fa-envelope"></i>
          { errors.firstname && <span className="app__input--error">{ errors.firstname }</span> }
        </div>
        <div className="app__input-container">
          <label className="app__input-label" htmlFor="lastname">Apellido:</label>
          <input
            type="text"
            id="lastname"
            placeholder="Apellido"
            autoComplete="off"
            className="app__input input"
            name="lastname"
            value={ user.lastname }
            onChange={ handleChange('lastname') }
          />
          <i className="fa fa-envelope"></i>
          { errors.lastname && <span className="app__input--error">{ errors.lastname }</span> }
        </div>
        <div className="app__input-container">
          <label className="app__input-label" htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            placeholder="Correo"
            autoComplete="off"
            className="app__input input"
            name="email"
            value={ user.email }
            onChange={ handleChange('email') }
          />
          <i className="fa fa-envelope"></i>
          { errors.email && <span className="app__input--error">{ errors.email }</span> }
        </div>
        <div className="app__input-container">
          <label className="app__input-label" htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            autoComplete="off"
            className="app__input input"
            name="password"
            value={ user.password }
            onChange={ handleChange('password') }
            />
          <i className="fa fa-key"></i>
          { errors.password && <span className="app__input--error">{ errors.password }</span> }
        </div>

        <button className="custom__button" style={{ marginBottom: '.5rem' }} type="submit">
          Registarse
        </button>
        <Link to="/auth/login" className="link">
          Ya tengo una cuenta
        </Link>
      </form>
    </div>
  )
}

export default Register