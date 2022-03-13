import React, { useContext, useEffect } from 'react'
import Loader from '../../components/loader/Loader';
import Widget from '../../components/widget/Widget'
import { AppContextInterface, AuthContext } from '../../services/contexts/AuthContext';
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext';
import { itemCounter } from '../../services/helpers/itemsCount';
import './dashboard.css'

const Dashboard = () => {
  const { dash, dashDispatch } = useContext(DashContext) as DashContextInterface;
  const { emplData, cliData, crsData }:any = dash;
  const itemsEmpl = emplData.rows;
  const itemsCli = cliData.rows;
  const itemsCrs = crsData.rows;
  useEffect(() => {
    dashDispatch({ type: 'GETALL', endpoint: 'empleados/clientes/cursos' });
  }, [])
  
  if (dash.checking == true || itemsEmpl === undefined || itemsCli === undefined || itemsCrs === undefined ) {
    return (<Loader />)
  }
  const itemsCountEmpl = itemCounter(itemsEmpl);
  
  return (
    <div className="app__dashboard">
      <h2 style={{ marginBottom: 15 }}>Dashboard</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Total de empleados"
          >
            {
              itemsCountEmpl.map((item:any, i:number) => {
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
            <p>TOTAL: { cliData.count }</p>
          </Widget>
        </div>
        <div className="app__dashboard-item">
          <Widget
            title="Total de Cursos"
          >
            <p>TOTAL: { crsData.count }</p>
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