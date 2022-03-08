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
      localStorage.setItem('token', token );
      dispatch({ type: types.login, payload: user});
      return
    }
    // return Swal.fire('Error', msg, 'error');
  },
  REGISTER: ({ dispatch }) => async ({ firstname, lastname, email, password }) => {
    console.warn('For now you can use the test user provided');
    const { usuario:user, token , msg } = await fetchWithoutToken('register', { firstname, lastname,  email, password}, 'POST');
    if (user) {
      localStorage.setItem('token', token );
      dispatch({ type: types.register, payload: user});
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