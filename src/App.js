import React from 'react';
import './App.css';
import Device from './component/Device';
import data from './deviceData';
import NavBar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {data.map((device)=>{
        return <Device name={device.name} ip={device.ip} status={device.status} hasError={device.hasError}/>
      })}
    </div>
  );
}

export default App;
