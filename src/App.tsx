import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import MyNav from './components/MyNav';

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <hr />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
