import React, { useContext, useEffect } from 'react'
import AddNewFab from '../../components/addNewFab/AddNewFab'
import Loader from '../../components/loader/Loader'
import Modal from '../../components/modal/Modal'
import Table from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import DashContext, { DashContextInterface } from '../../services/contexts/DashContext'

const Clients = () => {
  const { dash, dashDispatch } = useContext(DashContext) as DashContextInterface;
  const { cliData }:any = dash;
  const items = cliData.rows
  useEffect(() => {
    dashDispatch({ type: 'GETCLI', endpoint: 'clientes?limit=1000' });
  }, [])

  if (dash.checking == true || items === undefined ) {
    return (<Loader />)
  }
  return (
    <div className="app__dashboard">
      <AddNewFab isEmployee={ false }/>
      <h2 style={{ marginBottom: 15 }}>Clientes</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Clientes"
          >
            <p>TOTAL: { cliData.count }</p>
          </Widget>
        </div>
      </div>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget title="Tabla de Empleados">
            <Table data={ cliData } isEmployee={ false } />
          </Widget>
        </div>
      </div>
      <Modal isEmployee={ false } />
    </div>
  )
}

export default Clients