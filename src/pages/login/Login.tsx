import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../services/contexts/AuthContext';
import { AppContextInterface } from '../../services/contexts/AuthContext';
import './Login.css';
interface User {
  email: string;
  password: string;
}

const Login:React.FC = () => {

  const { authDispatch } = useContext(AuthContext) as AppContextInterface;
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const { handleSubmit, handleChange, data: user, errors } = useForm<User>({
    validations: {
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
      email: 'ariana@test.com',
      password: 'secret',
    },
    onSubmit: () => {
      authDispatch({ type: 'LOGIN', email: user.email, password: user.password })
    },
  });

  return (
    <div className="app__login">
      <h1 className="app__title">Iniciar sesión</h1>
      <div className="underline" />
      <form onSubmit={ handleSubmit } className="app__form slide-bottom">
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

        <div className="app__input-container" onClick={ () => setRememberMe(!rememberMe)}>
          <label className="app__input-label" htmlFor="remember">Recuerdame:</label>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(!e.target.checked)}
            
            />
        </div>
        <button className="custom__button" style={{ marginBottom: '.5rem' }} type="submit">
          Entrar
        </button>
        <Link to="/auth/registro" className="link">
          No tienes una cuenta?
        </Link>
      </form>
    </div>
  )
}

export default Login