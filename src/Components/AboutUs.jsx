import React from 'react';
import Navbar from './Navbar';

const AboutUs = ({ isSignedIn }) => {
    return (
        <div className="bg-blue-50 p-8">
            <Navbar isSignedIn={isSignedIn} /> {/* Add Navbar here */}
            <div className="container mx-auto mt-16"> {/* Added margin-top to avoid overlap with the navbar */}
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-700 animate-bounce">About Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
                        <p className="text-gray-700">
                            To provide top-notch inventory management solutions tailored for small electronics shops,
                            ensuring seamless operations and customer satisfaction.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
                        <p className="text-gray-700">
                            To be the leading provider of innovative and efficient inventory management systems
                            for small businesses, enabling them to thrive in a competitive market.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Values</h2>
                        <p className="text-gray-700">
                            Integrity, innovation, and customer-centricity guide our actions and decisions.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Team</h2>
                        <p className="text-gray-700">
                            A dedicated group of professionals committed to delivering exceptional service and support.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-300 my-8"></div>

                <footer className="mt-8 text-center animate-fade-in">
                    <div className="flex justify-center mb-4">
                        <a href="#" className="text-blue-600 mx-2 transition-transform transform hover:scale-125 duration-300" aria-label="Facebook">
                            <i className="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href="#" className="text-blue-600 mx-2 transition-transform transform hover:scale-125 duration-300" aria-label="Twitter">
                            <i className="fab fa-twitter fa-lg"></i>
                        </a>
                        <a href="#" className="text-blue-600 mx-2 transition-transform transform hover:scale-125 duration-300" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in fa-lg"></i>
                        </a>
                        <a href="#" className="text-blue-600 mx-2 transition-transform transform hover:scale-125 duration-300" aria-label="Instagram">
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                    </div>
                    <p className="text-gray-600">&copy; 2024 Inventory Management System. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default AboutUs;
