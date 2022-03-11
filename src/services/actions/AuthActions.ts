import { Reducer } from "react";
import { AsyncActionHandlers } from "use-reducer-async";
import { fetchWithoutToken } from "../helpers/fetch";
import { types, State, Action, User, AsyncAction } from "../types/types";
// import Swal from 'sweetalert2';

type Login = {
  type: string;
  payload: User
}
type Logout = {
  type: string;
}

export const login = (user: User): Login => ({
  type: types.login,
  payload:user
})

export const logout = (): Logout => ({
  type: types.logout,
})

export const asyncActionHandlers: AsyncActionHandlers<Reducer<State, Action>, AsyncAction> = {
  LOGIN: ({ dispatch }) => async ({ email, password }) => {
    const { usuario:user, token, msg } = await fetchWithoutToken('auth/login', { email, password }, 'POST');
    if (user) {
      const rol = user.rol?.split('_')[0];
      localStorage.setItem('token', token );
      dispatch({ type: types.login, payload: { ...user, rol }});
      return
    }
    // return Swal.fire('Error', msg, 'error');
  },
  REGISTER: ({ dispatch }) => async ({ firstname:nombre, lastname:apellido, email, password }) => {
    const { data, token, msg } = await fetchWithoutToken('clientes', { nombre, apellido, email, password }, 'POST');
    if (data) {
      const rol = data.rol?.split('_')[0];
      localStorage.setItem('token', token );
      dispatch({ type: types.login, payload: { ...data, rol }});
      return
    }
    return console.log(msg);

  },
  LOGOUT: ({ dispatch }) => async () => {
    localStorage.clear();
    dispatch({ type: types.logout })
    return
  }
};