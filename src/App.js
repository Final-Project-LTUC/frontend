import "./App.css";
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/home/Home";
import Navbar from "./pages/Navbar/Navbar";
import Services from "./pages/services/Services";
import Catalog from "./pages/catalog/Catalog";
import Aboutus from "./pages/aboutus/Aboutus";
import Footer from "../src/layout/footer/Footer";
import Dashboard from "./pages/dashBoard/Dashboard";
import DashboardNavbar from './components/dashboard/DashboardNavbar'; 
import Tasks from  "./pages/dashBoard/tasks/TasksPage"







function App() {
  const location = useLocation();

  // Define a function to conditionally render the navbar based on the current route
  const renderNavbar = () => {
    if (location.pathname === '/dashboard'||location.pathname === '/tasks') {
      return <DashboardNavbar />;
    } else {
      return <Navbar />;
    }
  };

  return (
    <div className="App">
      {renderNavbar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
