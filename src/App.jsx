import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/Forgotpassword';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
    );
};

export default App;
