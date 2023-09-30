import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Catalog from "./pages/catalog/Catalog";
import Aboutus from "./pages/aboutus/Aboutus";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </div>
  );
}

export default App;
