export const types = {
  login: '[auth] Login',
  logout: '[auth] Logout',
  register: '[auth] Register',
}

export interface State {
  uid: string | null
  checking: boolean
  logged: boolean
  firstname: string | null
  lastname: string | null
  email: string | null
}

export type AsyncAction = {
  type: string;
  email?: string;
  password?: string;
  firstname?:string;
  lastname?:string;
}

export type User = {
  email: string;
  password: string;
  firstname?: string
  lastname?: string
}

type InnerAction =
  | { type: string; payload?: User | State; email?:string, password?:string }

export type OuterAction = { type: string };

export type Action = InnerAction | OuterAction;