import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import SkinAnalysis from "./pages/SkinAnalysis";
import AuthForm from "./pages/AuthForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skin-analysis" element={<SkinAnalysis />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </Router>
  );
};

export default App;
