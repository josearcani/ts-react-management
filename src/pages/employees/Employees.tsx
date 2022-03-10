import React, { useContext, useEffect } from 'react'
import Loader from '../../components/loader/Loader';
import Table from '../../components/table/Table';
import Widget from '../../components/widget/Widget'
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import { itemCounter } from '../../services/helpers/itemsCount';
import './employees.css';

const Employees = () => {
  const { dash, dispatch } = useContext(DashContext) as DashContextInterface;
  const { data }:any = dash;
  console.log(dash)
  const items = data.rows

  useEffect(() => {
    dispatch({ type: 'GETALL', endpoint: 'empleados' });
  }, [])

  if (dash.checking) {
    return (
      <Loader />
      )
    }

  const itemsCount = itemCounter(items);

  return (
    <div className="app__dashboard">
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
            <p>TOTAL: { data.count }</p>
          </Widget>
        </div>
      </div>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget title="Tabla de Empleados">
            <Table data={ data } />
          </Widget>
        </div>
      </div>
    </div>
  )
}

export default Employees