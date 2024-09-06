// src/App.js
import React from 'react';
import SignupForm from './SignupForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'; 
import About from './About';

import Contact from './Contact';
import HomePage from './Home';


function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <HomePage/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  

      <SignupForm />
    </div>
  );
}

export default App;

