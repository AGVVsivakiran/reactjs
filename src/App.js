import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './dashboard'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} /> 
        <Route path="/dashboard" element={<Dashboard/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
