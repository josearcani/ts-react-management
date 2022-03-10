import React from 'react';
import { RiUserAddLine } from 'react-icons/ri';
import './addNewFab.css';

const AddNewFab = ({ isEmployee }:{ isEmployee:boolean }) => {
  return (
    <button className="app__fab">
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