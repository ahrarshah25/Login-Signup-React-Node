import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="flex justify-center gap-4 mt-8">
        <Link to="/signup" className="text-blue-600">Signup</Link>
        <Link to="/login" className="text-green-600">Login</Link>
      </div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;