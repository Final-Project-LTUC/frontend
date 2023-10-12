import "./App.css";

import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Home from "./pages/home/Home";
import Navbar from "./layout/header/Navbar/Navbar";
import Services from "./pages/services/Services";
import Catalog from "./pages/catalog/Catalog";
import AboutUs from './pages/aboutUs/ABOUTUS';
import Footer from "./layout/footer/Footer";
import Dashboard from "./pages/dashBoard/Dashboard";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import UpdateForm from "./pages/dashBoard/update/Update";
import HandymanDetails from "./pages/catalog/HandymanDetails";
import DashboardNavbar from './Components/dashboard/DashboardNavbar'; 



import Tasks from  "./pages/dashBoard/tasks/TasksPage"

import Auth from "./pages/auth/Auth";
import LoginProvider from "./hooks/Context/LoginProvider";
import ServicesTest from "./pages/services/servicesTest/ServicesTest";





// Create and export the socket connection

function App() {
  const location = useLocation(); 


  // Define a function to conditionally render the navbar based on the current route
  const renderNavbar = () => {
    if (location.pathname === "/dashboard" || location.pathname === "/tasks") {
      return <DashboardNavbar />;
    } else if (location.pathname === "/") {
      
    } else {
      return <Navbar />;
    }
  };

  return (
    <div className="App">
      <LoginProvider>
      {renderNavbar()}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/services" element={<ServicesTest  hue="220" />} />

         <Route path="/catalog" element={<Catalog />} />
                <Route
                    path="/handyman/:id"
                    element={<HandymanDetails />}
                />{" "}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/update" element={<UpdateForm />} />        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path='/signup' element={<Auth submitAction='signup' />}/>
        <Route path='/signin' element={<Auth submitAction='signin' />}/>
      </Routes>

      </LoginProvider>
      <Footer />
    </div>
  );

}

export default App;
