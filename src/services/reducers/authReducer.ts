import { initialState } from '../contexts/AuthContext';
import { types, State } from '../types/types';

type Action = 
  | { type: string; payload: State };

export const authReducer = (state: typeof initialState , action: Action):State => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
        checking: false,
      }
    case types.logout:
      return {
        logged: false,
        checking:false,
        id: null,
        email: null,
        nombre: null,
        apellido: null,
        rol: null
      }
    default:
      return state
  }
}
