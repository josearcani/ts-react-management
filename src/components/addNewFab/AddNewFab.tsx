import React, { useContext } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import { types } from '../../services/types/types';
import './addNewFab.css';

const AddNewFab = ({ title }:{ title:string }) => {

  const { dashDispatch } = useContext(DashContext) as DashContextInterface;

  return (
    <button
      className="app__fab"
      onClick={ () => dashDispatch({ type: types.dashOpenModal })}
    >
      <RiAddCircleLine style={{ fontSize: 15 }} />
      <span>{ title }</span>
    </button>
  )
}

export default AddNewFab