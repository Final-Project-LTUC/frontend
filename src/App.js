import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/Navbar/Navbar";
import Services from "./pages/services/Services";
import Catalog from "./pages/catalog/Catalog";
import Aboutus from "./pages/aboutus/Aboutus";
import Footer from "../src/layout/footer/Footer";
import Dashboard from "./pages/dashBoard/Dashboard";

import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import Tasks from "./pages/dashBoard/tasks/TasksPage";

import Auth from "./pages/auth/Auth";
import LoginProvider from "./hooks/Context/LoginProvider";
import UserTypeModal from "./Components/SignupSingin/UserTypeModal";

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
      {renderNavbar()}
      <LoginProvider>
        <UserTypeModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/tasks" element={<Tasks />} />

          <Route
            path="/handymanSignup"
            element={<Auth submitAction="signup" userType="handyman" />}
          />
          <Route
            path="/userSignup"
            element={<Auth submitAction="signup" userType="user" />}
          />
          <Route
            path="/handymanSingin"
            element={<Auth submitAction="signin" userType="handyman" />}
          />
          <Route
            path="/userSignin"
            element={<Auth submitAction="signin" userType="user" />}
          />
        </Routes>
      </LoginProvider>
      <Footer />
    </div>
  );
}

export default App;
