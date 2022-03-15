import { initialState } from '../contexts/DashContext';
import { types, DashState } from '../types/types';

type Action = 
  | { type: string; payload: string | null };

export const dashReducer = (state: typeof initialState , action: Action):DashState => {
  switch (action.type) {
    case types.dashLoadEmplData:
      return {
        ...state,
        emplData: action.payload,
        activeData: {},
      }
    case types.dashLoadCliData:
      return {
        ...state,
        cliData: action.payload,
        activeData: {},
      }
    case types.dashLoadCrsData:
      return {
        ...state,
        crsData: action.payload,
        activeData: {},
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
        msgError: action.payload,
        activeData: {},
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
    case types.dashItemActive:
      return {
        ...state,
        activeData: action.payload
      }
    case types.dashClearData:
      return {
        ...state,
        emplData: {},
        cliData: {},
        crsData: {},
        activeData: {},
      }
    default:
      return state
  }
}
