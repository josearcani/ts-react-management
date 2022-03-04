import React, { createContext, Dispatch, useCallback } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import { authReducer } from '../reducers/authReducer';
import { asyncActionHandlers } from '../actions/AuthActions';
import { fetchWithToken } from '../helpers/fetch';
import { State, Action } from '../types/types'

export interface AppContextInterface {
  user: State,
  dispatch: Dispatch<Action>,
  verifyToken: () => {},
}

export const AuthContext = createContext<AppContextInterface | null>(null);

export const initialState: State = {
  checking: true,
  logged: false,
  uid: null,
  firstname: null,
  lastname: null,
  email: null,
};

type AuthContextProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthContextProviderProps) => {

  const [user, dispatch] = useReducerAsync(authReducer, initialState, asyncActionHandlers);

  const verifyToken = useCallback(
    async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        dispatch({ type: 'LOGOUT' });
        return false;
      }

      const resp = await fetchWithToken('auth');
      if (resp?.user) {
        localStorage.setItem('token', resp.token );
        const { user } = resp;
        dispatch({ type: 'LOGIN', payload: user });
        return true
      } else {
        dispatch({ type: 'LOGOUT' });
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