import React from 'react'
import { Widget } from '../../components'

const Profile = () => {
  return (
    <div className="app__dashboard">
      <h2 style={{ marginBottom: 15 }}>Perfil</h2>
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

export default Profile