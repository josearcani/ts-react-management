import React, { useContext, useEffect } from 'react'
import AddNewFab from '../../components/addNewFab/AddNewFab';
import Loader from '../../components/loader/Loader';
import Modal from '../../components/modal/Modal';
import Table from '../../components/table/Table';
import Widget from '../../components/widget/Widget'
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import { itemCounter } from '../../services/helpers/itemsCount';
import './employees.css';

const Employees = () => {
  const { dash, dashDispatch } = useContext(DashContext) as DashContextInterface;
  const { emplData }:any = dash;
  const items = emplData.rows;
  
  useEffect(() => {
    dashDispatch({ type: 'GETEMPL', endpoint: 'empleados?limit=1000' });
  }, [])
  
  if (dash.checking == true || items === undefined ) {
    return (<Loader />)
  }
  const itemsCount = itemCounter(items);
  return (
    <div className="app__dashboard">
      <AddNewFab title="Nuevo Empleado" />
      <h2 style={{ marginBottom: 15 }}>Empleados</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Empleados"
          >
            {
              itemsCount.map((item:any, i:number) => {
                return (
                  <p key={ i }>{item.item} : <span>{ item.counter }</span></p>
                )
              })
            }
            <p>TOTAL: { emplData.count }</p>
          </Widget>
        </div>
      </div>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget title="Tabla de Empleados">
            <Table data={ emplData } isEmployee={ true } />
          </Widget>
        </div>
      </div>
      <Modal isEmployee={ true } />
    </div>
  )
}

export default Employees