import { Reducer } from "react";
import Swal from "sweetalert2";
import { AsyncActionHandlers } from "use-reducer-async";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types, State, Action, User, AsyncAction } from "../types/types";

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
  'LOGIN': ({ dispatch }) => async ({ email, password }) => {
    try {
      const { usuario:user, token, msg } = await fetchWithoutToken('auth/login', { email, password }, 'POST');
      if (user) {
        const rol = user.rol?.split('_')[0];
        console.log(msg);
        localStorage.setItem('token', token );
        dispatch({ type: types.login, payload: { ...user, rol }});
        return
      }
      Swal.fire('Error', msg, 'error');
      return
    } catch (error) {
      console.log(error);
    }
  },
  'REGISTER-CLIENT': ({ dispatch }) => async ({ firstname:nombre, lastname:apellido, email, password }) => {
    try {
      const { data, msg } = await fetchWithToken('clientes', { nombre, apellido, email, password }, 'POST');
      if (data) {
        Swal.fire('Success', msg, 'success');
        return 
      } else {
        Swal.fire('Error', msg, 'error');
        return 
      }
    } catch (error) {
      console.log(error);
    }
  },
  'REGISTER-EMPLOYEE': ({ dispatch }) => async ({ firstname:nombre, lastname:apellido, email, password, rol }) => {
    try {
      const { data, msg } = await fetchWithToken('empleados', { nombre, apellido, email, password, rol }, 'POST');
      if (data) {
        Swal.fire('Success', msg, 'success');
        return 
      } else {
        Swal.fire('Error', msg, 'error');
        return 
      }
    } catch (error) {
      console.log(error);
    }
  },
  'LOGOUT': ({ dispatch }) => async () => {
    localStorage.clear();
    dispatch({ type: types.logout })
    return
  }
};