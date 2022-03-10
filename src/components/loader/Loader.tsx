import React from 'react';
import './loader.css';

const Loader:React.FC = () => {
  return (
    <div className="app__loader">
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader