import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Analysis from "./pages/Analysis";
import Login from "./pages/Login";import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AIConsultation from "./components/AIConsultation";
import Footer from "./components/Footer";
import "./styles/styles.css"; // Import global styles



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </Router>
  );
}

export default App;
