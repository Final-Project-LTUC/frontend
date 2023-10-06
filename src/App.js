import "./App.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/Navbar/Navbar";
import Services from "./pages/services/Services";
import Catalog from "./pages/catalog/Catalog";
import Aboutus from "./pages/aboutus/Aboutus";
import Footer from "../src/layout/footer/Footer";
import Dashboard from "./pages/dashBoard/Dashboard";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import HandymanDetails from "./pages/catalog/HandymanDetails";

function App() {
    const location = useLocation();

    const renderNavbar = () => {
        if (location.pathname === "/dashboard") {
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
                <Route
                    path="/handyman/:id"
                    element={<HandymanDetails />}
                />{" "}
                {/* Updated this line */}
                <Route path="/about" element={<Aboutus />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
