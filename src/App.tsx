import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterPage from './pages/register_page/RegisterPage';
import LoginPage from './pages/login_page/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/login" element={<LoginPage />}/>
       <Route path="/register" element={<RegisterPage />}/>
       <Route path="/" element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
