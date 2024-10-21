import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import productInventoryImage from '../Components/images/product-inventory.jpg';
import stockTrackingImage from '../Components/images/stock-tracking.jpg';
import salesManagementImage from '../Components/images/sales-management.jpg';
import carouselImage1 from '../Components/images/carousel-1.jpg';
import carouselImage2 from '../Components/images/carousel-2.jpg';
import carouselImage3 from '../Components/images/carousel-3.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        // Set the typing complete state after 4 seconds, when the typing animation finishes
        const timer = setTimeout(() => {
            setTypingComplete(true);
        }, 4000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-blue-700 text-white shadow-lg">
                <h1 className="text-4xl font-bold tracking-wide">Inventa</h1>
                <nav>
                    <button
                        className="mr-4 px-6 py-2 bg-white text-blue-700 rounded-lg shadow hover:bg-blue-100 transition duration-300 font-semibold"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                    <button
                        className="px-6 py-2 bg-white text-blue-700 rounded-lg shadow hover:bg-blue-100 transition duration-300 font-semibold"
                        onClick={() => navigate('/register')}
                    >
                        Sign Up
                    </button>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center text-center p-10">
                {/* Title with Typewriter Effect */}
                <h2 className={`text-5xl font-bold mb-8 text-blue-800 leading-tight typewriter ${typingComplete ? 'typing-complete' : ''}`}>
                    Simple Inventory Management Software
                </h2>
                <p className="mb-16 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    The best inventory software for small businesses to manage their physical inventory, including supplies, materials, tools, and equipment.
                </p>

                {/* Marketing Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 mb-16">
                    {/* Card 1 */}
                    <div className="rounded-lg shadow-lg overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105">
                        <img src={productInventoryImage} alt="Product Inventory" className="w-full h-48 object-contain" />
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-2 text-blue-600">Manage Your Products</h3>
                            <p className="text-gray-600">
                                Easily add, edit, and track products in your inventory with user-friendly interfaces.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-lg shadow-lg overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105">
                        <img src={stockTrackingImage} alt="Real-Time Stock Tracking" className="w-full h-48 object-contain" />
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-2 text-blue-600">Real-Time Stock Tracking</h3>
                            <p className="text-gray-600">
                                Stay updated with instant alerts for low stock levels and manage inventory efficiently.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-lg shadow-lg overflow-hidden bg-white transition-transform duration-300 transform hover:scale-105">
                        <img src={salesManagementImage} alt="Sales Management" className="w-full h-48 object-contain" />
                        <div className="p-6">
                            <h3 className="font-bold text-xl mb-2 text-blue-600">Sales Management Made Easy</h3>
                            <p className="text-gray-600">
                                Record transactions seamlessly and manage sales effectively with advanced reporting tools.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Get Started Button */}
                <button
                    className="mt-10 mb-16 px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-bold hover:bg-blue-700 transform transition-all duration-300 hover:scale-110"
                    onClick={() => navigate('/login')}
                >
                    Get Started
                </button>

                {/* Bold Text Below the Button */}
                <div className="mb-8 text-right max-w-3xl mx-auto">
                    <p className="font-bold text-lg text-blue-800">
                        Organize and automate your inventory at the touch of a button.
                    </p>
                </div>

                {/* Image Carousel */}
                <div className="relative overflow-hidden w-full max-w-3xl mx-auto mb-10">
                    <Slider {...settings}>
                        <div>
                            <img
                                src={carouselImage1}
                                alt="Carousel Image 1"
                                className="w-full h-64 object-cover shadow-2xl rounded-lg transform transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div>
                            <img
                                src={carouselImage2}
                                alt="Carousel Image 2"
                                className="w-full h-64 object-cover shadow-2xl rounded-lg transform transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div>
                            <img
                                src={carouselImage3}
                                alt="Carousel Image 3"
                                className="w-full h-64 object-cover shadow-2xl rounded-lg transform transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </Slider>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-blue-700 text-white text-center p-4 mt-10">
                <p className="text-sm">© 2024 Inventa. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
