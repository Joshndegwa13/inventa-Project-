import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
const App = () => {
    return (

        <Router>
        <div className="flex-grow flex items-center justify-center">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </div>
    </Router>
    );
};

export default App;
