export const types = {
  login: '[auth] Login',
  logout: '[auth] Logout',
  register: '[auth] Register',

  dashStartLoader: '[dash] StartLoader',
  dashFinishLoader: '[dash] FinishLoader',

  dashSetError: '[dash] Set Error',
  dashRemoveError: '[dash] Remove Error',

  dashToggle: '[dash] Toggle Toggle',
  dashOpenModal: '[dash] Modal Open',
  dashCloseModal: '[dash] Modal Close',

  dashLoadData: '[dash] Load Data',
  dashItemNew: '[dash] New Item',
  dashItemActive: '[dash] Active Item',
  dashItemUpdate: '[dash] Update Item',
  dashItemDelete: '[dash] Delete Item',
}

export interface State {
  id: string | null
  checking: boolean
  logged: boolean
  nombre: string | null
  apellido: string | null
  email: string | null
  rol: string | null
}

export interface DashState {
  checking: boolean
  toggle: boolean
  msgError: string | null
  data: Object | null
}

export type AsyncAction = {
  type: string;
  email?: string;
  password?: string;
  firstname?:string;
  lastname?:string;
}

export type DashAsyncAction = {
  type: string;
  endpoint: string
}

export type User = {
  email: string;
  password: string;
  nombre?: string
  apellido?: string
}

type InnerAction = {
  type: string;
  payload?: User | State;
  email?:string,
  password?:string,
  endpoint?:string
}

export type OuterAction = { type: string };

export type Action = InnerAction | OuterAction;

type DashInnerAction = 
  | { type: 'GETALL', endpoint?:string }
  | { type: 'GETONE', endpoint?:string }

type DashOuterAction = {
  type: string 
}
export type DashAction = DashInnerAction | DashOuterAction