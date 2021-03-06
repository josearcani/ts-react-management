import React, { createContext, Dispatch } from 'react'
import { useReducerAsync } from 'use-reducer-async'
import { asyncActionHandlers } from '../actions/DashActions'
import { dashReducer } from '../reducers/dashReducer'
import { Action, DashAction, DashState } from '../types/types'

export interface DashContextInterface {
  dash: DashState
  dashDispatch: any
}

type DashContextProviderProps = {
  children: React.ReactNode
}

export const initialState:DashState = {
  checking: true,
  msgError: '',
  toggle: false,
  emplData: {},
  cliData: {},
  crsData: {},
  activeData: {},
};

export const DashContext = createContext<DashContextInterface | null>(null);

export const DashProvider = ({ children }:DashContextProviderProps ) => {

  const [dash, dispatch] = useReducerAsync(dashReducer, initialState, asyncActionHandlers);

  const dashContext:DashContextInterface = {
    dash,
    dashDispatch: dispatch,
  }

  return (
    <DashContext.Provider value={dashContext}>
      { children }
    </DashContext.Provider>
  )
}

export default DashContext