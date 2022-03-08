import React from 'react'
import Widget from '../../components/widget/Widget'

const Membership = () => {
  return (
    <div className="app__dashboard">
      <h2 style={{ marginBottom: 15 }}>Membresias</h2>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
          <Widget
            title="Otorgar membresia"
          >
            <p>Hombres: 1</p>
            <p>Mujeres: 4</p>
            <p>No binarios: 4</p>
            <p>Total: 7</p>
          </Widget>
        </div>
      </div>
      <div className="app__dashboard-row">
        <div className="app__dashboard-item">
        </div>
      </div>
    </div>
  )
}

export default Membership