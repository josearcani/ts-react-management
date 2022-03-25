import React, { createContext, Reducer } from 'react'
import { AsyncActionHandlers } from 'use-reducer-async';
import { fetchWithToken } from '../helpers/fetch';
import { Action, DashAsyncAction, DashState, types } from '../types/types';

export const asyncActionHandlers: AsyncActionHandlers<Reducer<DashState, Action>, DashAsyncAction> = {
  GETEMPL: ({ dispatch }) => async ({ endpoint }) => {
    dispatch({ type: types.dashStartLoader });
    const { data }:any = await fetchWithToken(endpoint);
    dispatch({ type: types.dashLoadEmplData, payload: data });
    dispatch({ type: types.dashFinishLoader });
    return
    // return console.log(msg);
  },
  GETCLI: ({ dispatch }) => async ({ endpoint }) => {
    dispatch({ type: types.dashStartLoader });
    const { data }:any = await fetchWithToken(endpoint);
    dispatch({ type: types.dashLoadCliData, payload: data });
    dispatch({ type: types.dashFinishLoader });
    return
    // return console.log(msg);
  },
  GETCRS: ({ dispatch }) => async ({ endpoint }) => {
    dispatch({ type: types.dashStartLoader });
    const { data }:any = await fetchWithToken(endpoint);
    dispatch({ type: types.dashLoadCrsData, payload: data });
    dispatch({ type: types.dashFinishLoader });
    return
    // return console.log(msg);
  },
  GETALL: ({ dispatch }) => async ({ endpoint }) => {
    dispatch({ type: types.dashStartLoader });
    const [{ data:emplData },{ data:cliData },{ data:crsData }]:any = await Promise.all([
      fetchWithToken('empleados?limit=1000'),
      fetchWithToken('clientes?limit=1000'),
      fetchWithToken('cursos?limit=1000')
    ]);
    dispatch({ type: types.dashLoadEmplData, payload: emplData });
    dispatch({ type: types.dashLoadCliData, payload: cliData });
    dispatch({ type: types.dashLoadCrsData, payload: crsData });
    dispatch({ type: types.dashFinishLoader });
    return
    // return console.log(msg);
  },
  GETONE: ({ dispatch }) => async ({ endpoint }) => {
    const { data }:any = await fetchWithToken(endpoint);
    if (Array.isArray(data)) {
      dispatch({ type: types.dashItemActive, payload: data[0] });
    } else {
      dispatch({ type: types.dashItemActive, payload: { ...data } });
    }
    dispatch({ type: types.dashFinishLoader });
    return
  },
  POSTONE: ({ dispatch }) => async (payload:any) => {
    const { msg }:any = await fetchWithToken('cursos', { ...payload }, 'POST');
    console.log(msg);
    return
  },
  DELETEONE: ({ dispatch }) => async ({ endpoint }) => {
    const { msg }:any = await fetchWithToken(endpoint, {}, 'DELETE');
    console.log(msg);
    return
  }
};