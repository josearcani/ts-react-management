import React, { useEffect, createContext, Dispatch, useCallback } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import { authReducer } from '../reducers/authReducer';
import { asyncActionHandlers } from '../actions/AuthActions';
import { fetchWithToken } from '../helpers/fetch';
import { State, Action, types } from '../types/types'

export interface AppContextInterface {
  user: State,
  dispatch: Dispatch<Action>,
  verifyToken: () => {},
}

export const AuthContext = createContext<AppContextInterface | null>(null);

type AuthContextProviderProps = {
  children: React.ReactNode
}

const init = () => {
  // @ts-ignore
  return JSON.parse(localStorage.getItem('user')) || {
    checking: true,
    logged: false,
    id: null,
    nombre: null,
    apellido: null,
    email: null,
  };
}

export const initialState:State = init();

export const AuthProvider = ({ children }: AuthContextProviderProps) => {

  const [user, dispatch] = useReducerAsync(authReducer, initialState, asyncActionHandlers);

  useEffect(() => {
    if (!user) return
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])


  const verifyToken = useCallback(
    async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        dispatch({ type: types.logout });
        return false;
      }

      const resp = await fetchWithToken('auth');
      if (resp?.usuario) {
        localStorage.setItem('token', resp.token );
        const { usuario:user } = resp;
        dispatch({ type: types.login, payload: user });
        return true
      } else {
        dispatch({ type: types.logout });
        return false
      }
    },[ dispatch ])

    const appContext: AppContextInterface = {
      user,
      dispatch,
      verifyToken,
    }

  return (
    <AuthContext.Provider value={appContext}>
        { children }
    </AuthContext.Provider>
  )
}