import React, { createContext, Reducer } from 'react'
import { AsyncActionHandlers } from 'use-reducer-async';
import { fetchWithToken } from '../helpers/fetch';
import { Action, DashAsyncAction, DashState, types } from '../types/types';



export const asyncActionHandlers: AsyncActionHandlers<Reducer<DashState, Action>, DashAsyncAction> = {
  GETALL: ({ dispatch }) => async ({ endpoint }) => {
    dispatch({ type: types.dashStartLoader });
    const { data }:any = await fetchWithToken(endpoint);
    dispatch({ type: types.dashLoadData, payload: data });
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