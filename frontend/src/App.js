import React, { useState, useEffect } from 'react';
import './App.css';
import { trigger } from './service/utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState('');


  const handleClick = () => {
    trigger();
  };

  return (
    <div className="container">
      <div className="content">
        <h1>OFLOW DEVICE</h1>
        <p>Toggle the switch down below</p>
        <button onClick={handleClick}>PRESS</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
