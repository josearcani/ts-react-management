import React, { useContext, useEffect } from 'react'
import Loader from '../../components/loader/Loader';
import Widget from '../../components/widget/Widget'
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import { itemCounter } from '../../services/helpers/itemsCount';
import './dashboard.css'

const Dashboard = () => {
  const { dash, dashDispatch } = useContext(DashContext) as DashContextInterface;
  const { emplData }:any = dash;
  const items = emplData.rows;
  console.log(dash);
  useEffect(() => {
    dashDispatch({ type: 'GETALL', endpoint: 'empleados/clientes/cursos' });
  }, [])
  
  if (dash.checking == true || items === undefined ) {
    return (<Loader />)
  }
  const itemsCount = itemCounter(items);

  return (
    <div className="app__dashboard">
      <h2 style={{ marginBottom: 15 }}>Dashboard</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Total de empleados"
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
        <div className="app__dashboard-item">
          <Widget
            title="Total de clientes"
          >
            <p>Varones 5</p>
            <p>Mujeres 5</p>
            <p>No binarios 5</p>
            <p>Total 15</p>
          </Widget>
        </div>
        <div className="app__dashboard-item">
          <Widget
            title="Total de Cursos"
          >
            <p>Activos 2</p>
            <p>Inactivos 1</p>
            <p>Total 3</p>
          </Widget>
        </div>
      </div>
      <div className="app__dashboard-row">
        {/* <div className="app__dashboard-item">
          asdasd
        </div>
        <div className="app__dashboard-item">
          asdasd
        </div>
        <div className="app__dashboard-item">
          asdasd
        </div> */}
      </div>
    </div>
  )
}

export default Dashboard