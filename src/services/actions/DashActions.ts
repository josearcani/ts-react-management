import React, { createContext, Reducer } from 'react'
import { AsyncActionHandlers } from 'use-reducer-async';
import { fetchWithToken } from '../helpers/fetch';
import { Action, DashAsyncAction, DashState, types } from '../types/types';



export const asyncActionHandlers: AsyncActionHandlers<Reducer<DashState, Action>, DashAsyncAction> = {
  GETALL: ({ dispatch }) => async ({ endpoint }) => {
    dispatch({ type: types.dashStartLoader });
    const { empleados:data }:any = await fetchWithToken(endpoint);
    console.log(data);
    dispatch({ type: types.dashFinishLoader });
    return
    // return console.log(msg);
  },
  GETONE: ({ dispatch }) => async () => {
    console.log('GET ONE')
    // dispatch({ type: types.logout })
    return
  }
};