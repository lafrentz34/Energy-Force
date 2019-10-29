import React from 'react';
import Customer from './Customer'
import SideBar from './SideBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
      <SideBar/>
      </div>
      <div className='customer'>
      <Customer/>
      </div>
    </div>
  );
}

export default App;
