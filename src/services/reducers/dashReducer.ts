import { initialState } from '../contexts/DashContext';
import { types, DashState } from '../types/types';

type Action = 
  | { type: string; payload: string | null };

export const dashReducer = (state: typeof initialState , action: Action):DashState => {
  console.log(action);
  switch (action.type) {
    case types.dashStartLoader:
      return {
        ...state,
        checking: true,
      }
    case types.dashFinishLoader:
      return {
        ...state,
        checking: false,
      }
    case types.dashSetError:
      return {
        ...state,
        msgError: action.payload
      }
    case types.dashRemoveError:
      return {
        ...state,
        msgError: null
      }
    case types.dashToggle:
      return {
        ...state,
        toggle: !state.toggle
      }
    case types.dashOpenToggle:
      return {
        ...state,
        toggle: false
      }
    case types.dashCloseToggle:
      return {
        ...state,
        toggle: true
      }
    default:
      return state
  }
}
