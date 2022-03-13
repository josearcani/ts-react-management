import React from 'react'
import Widget from '../../components/widget/Widget'

const Settings = () => {
  return (
    <div className="app__dashboard">
    <h2 style={{ marginBottom: 15 }}>Configuración</h2>
    <div className="app__dashboard-row">
      <div className="app__dashboard-item">
        <Widget
          title="En construcción"
        >
        </Widget>
      </div>
    </div>
  </div>
  )
}

export default Settings