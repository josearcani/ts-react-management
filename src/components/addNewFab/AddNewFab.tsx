import React, { useContext } from 'react';
import { RiUserAddLine } from 'react-icons/ri';
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import { types } from '../../services/types/types';
import './addNewFab.css';

const AddNewFab = ({ isEmployee }:{ isEmployee:boolean }) => {

  const { dashDispatch } = useContext(DashContext) as DashContextInterface;

  return (
    <button
      className="app__fab"
      onClick={ () => dashDispatch({ type: types.dashOpenModal })}
    >
      <RiUserAddLine style={{ fontSize: 15 }} />
      {
        isEmployee
          ? <span>Empleado</span>
          : <span>Cliente</span>
      }
    </button>
  )
}

export default AddNewFab