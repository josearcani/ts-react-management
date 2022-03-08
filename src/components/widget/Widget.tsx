import React from 'react'
import './widget.css'

const Widget = ({ title = null, className = '', children, options = {} }: any) => {

  return (
    <>
      <section
        className="app__widget"
      >
        {
          title && (
            <div className="app__widget-title">
              { title }
            </div>
          )
        }
        <div className="app__widget-container">
          { children }
        </div>
      </section>
    </>
  )
}

export default Widget