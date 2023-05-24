import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contacts/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footerss from "./components/Footer/Footerss";
import Headerss from "./components/Header/Headerss";

const App = () => {
  return (
    <Router>
      <Headerss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footerss />
    </Router>
  );
};

export default App;
