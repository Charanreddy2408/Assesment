import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Correct import for Routes and Route
import Navbar from './components/Navbar';
import Login from './components/login'; // Assuming login.jsx is the login page component
import About from './components/About'; // Add more pages as needed
import Contact from './components/Contact'; // Add more pages as needed

function App() {
  return (
    <div className="App">
      {/* Navbar will appear on all pages */}
      <Navbar />

      {/* Define routes using the new syntax in React Router v6+ */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
