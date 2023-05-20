import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Expenses from './components/Expenses';
import Invoices from './components/Invoices';
import Login from './components/Login';
import Products from './components/Products';
import Admin from './components/Admin';
import Register from './components/Register';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="login" element={<Login/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="admin" element={<Admin/>}/>
      <Route path="register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
