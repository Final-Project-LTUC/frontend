import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Auth from './pages/auth/Auth';
import LoginProvider from "./hooks/Context/LoginProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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

);

reportWebVitals();
