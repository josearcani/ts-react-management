import { initialState } from '../contexts/DashContext';
import { types, DashState } from '../types/types';

type Action = 
  | { type: string; payload: string | null };

export const dashReducer = (state: typeof initialState , action: Action):DashState => {
  console.log(state);
  switch (action.type) {
    case types.dashLoadEmplData:
      return {
        ...state,
        emplData: action.payload,
      }
    case types.dashLoadCliData:
      return {
        ...state,
        clData: action.payload,
      }
    case types.dashLoadCrsData:
      return {
        ...state,
        crsData: action.payload,
      }
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
    case types.dashOpenModal:
      return {
        ...state,
        toggle: true
      }
    case types.dashCloseModal:
      return {
        ...state,
        toggle: false
      }
    default:
      return state
  }
}
