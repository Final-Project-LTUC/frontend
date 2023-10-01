import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import LoginProvider from './hooks/Context/LoginProvider';
import Auth from './pages/auth/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={'true'}>
      <LoginProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/handymanSignup' element={<Auth submitAction='signup' userType='handyman'/>}/>
      <Route path='/userSignup' element={<Auth submitAction='signup' userType='user'/>}/>
      <Route path='/handymanSingin' element={<Auth submitAction='signin' userType='handyman'/>}/>
      <Route path='/userSignin' element={<Auth submitAction='signin' userType='user'/>}/>
    </Routes>
      <App />
    </BrowserRouter>
      </LoginProvider>
    </ChakraProvider>

  </React.StrictMode>
);

reportWebVitals();