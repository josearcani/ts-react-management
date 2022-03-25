export const types = {
  login: '[auth] Login',
  logout: '[auth] Logout',
  register: '[auth] Register',
  msg: '[auth] Messsage',

  dashStartLoader: '[dash] StartLoader',
  dashFinishLoader: '[dash] FinishLoader',

  dashSetError: '[dash] Set Error',
  dashRemoveError: '[dash] Remove Error',

  dashToggle: '[dash] Toggle Toggle',
  dashOpenModal: '[dash] Modal Open',
  dashCloseModal: '[dash] Modal Close',

  dashLoadEmplData: '[dash] Load Employees Data',
  dashLoadCliData: '[dash] Load Clients Data',
  dashLoadCrsData: '[dash] Load Courses Data',
  dashClearData: '[dash] Clear Data',
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
  msg: string | null
}

export interface DashState {
  checking: boolean
  toggle: boolean
  msgError: string | null
  emplData: Object | null
  cliData: Object | null
  crsData: Object | null
  activeData: Object | {}
}

export type AsyncAction = {
  type: string;
  email?: string;
  password?: string;
  firstname?:string;
  lastname?:string;
  rol?:string
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
  firstname?:string,
  lastname?:string,
  email?:string,
  password?:string,
  endpoint?:string
  rol?:string
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