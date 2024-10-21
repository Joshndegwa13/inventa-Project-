import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import productInventoryImage from '../Components/images/product-inventory.jpg';
import stockTrackingImage from '../Components/images/stock-tracking.jpg';
import salesManagementImage from '../Components/images/sales-management.jpg';
import productImage from '../Components/images/Products.png'; // Ensure this is imported correctly
import insightsImage from '../Components/images/Insights.png'
import inventoryImage from '../Components/images/Inventory.png'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTypingComplete(true);
        }, 4000);
        return () => clearTimeout(timer);
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

                {/* Bold Text Above the Button */}
                <div className="mb-8 text-center max-w-3xl mx-auto">
                    <p className="font-bold text-3xl text-blue-800">
                        Organize and automate your inventory at the touch of a button.
                    </p>
                </div>

                {/* Get Started Button */}
                <button
                    className="mt-10 mb-16 px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-bold hover:bg-blue-700 transform transition-all duration-300 hover:scale-110"
                    onClick={() => navigate('/login')}
                >
                    Get Started
                </button>

                {/* Section 1: Text and Image */}
                <div className="flex flex-wrap items-start mb-8"> {/* Add bottom margin here */}
                    <div className="w-full md:w-1/2 p-8">
                        <h4 className="font-bold text-2xl mb-4">Track and manage your entire inventory with one easy app.</h4>
                        <ul className="list-none space-y-4">
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 text-xl">✔</span>
                                <p className="text-gray-600">
                                    Easily manage your existing inventory with Inventa.
                                </p>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 text-xl">✔</span>
                                <p className="text-gray-600">
                                    Organize inventory by Name, Location, and more.
                                </p>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 text-xl">✔</span>
                                <p className="text-gray-600">
                                    Add product details with a click.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section: Image */}
                    <div className="w-full md:w-1/2 p-4 md:p-0 flex justify-end">
                        <img
                            src={productImage} // Use the correct variable here
                            alt="A dashboard for managing inventory with graphs and lists."
                            className="w-full h-auto object-contain shadow-lg md:max-w-[50%]"
                        />
                    </div>
                </div>

                {/* Section 2: Image and Text */}
                <div className="flex flex-wrap items-start mt-8"> {/* Add top margin here */}
                    {/* Left Section: Image */}
                    <div className="w-full md:w-1/2 p-4 md:p-0 flex justify-start">
                        <img
                            src={insightsImage}
                            alt="A dashboard for managing inventory with graphs and lists."
                            className="w-full h-auto object-contain shadow-lg md:max-w-[50%]"
                        />
                    </div>

                    {/* Right Section: Text */}
                    <div className="w-full md:w-1/2 p-8">
                        <h4 className="font-bold text-2xl mb-4">Get real-time reporting insights. </h4>
                        <ul className="list-none space-y-4">
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 text-xl">✔</span>
                                <p className="text-gray-600">
                                    In-depth data on stocks , sales and products.
                                </p>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 text-xl">✔</span>
                                <p className="text-gray-600">
                                    Empower Your Team with Data-Driven Insights!
                                </p>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 text-xl">✔</span>
                                <p className="text-gray-600">
                                    Stay Ahead of the Competition with Predictive Insights!
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </main>

              <div className="flex flex-wrap items-start mb-8"> {/* Add bottom margin here */}
                    <div className="w-full md:w-1/2 p-8">
                        <h4 className="font-bold text-2xl mb-4">Your One-Stop Solution for Inventory Success!</h4>
                        <ul className="list-none space-y-4">
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 text-xl">✔</span>
                                <p className="text-gray-600">
                                    Save Time, Reduce Costs, Increase Efficiency!
                                </p>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 text-xl">✔</span>
                                <p className="text-gray-600">
                                    Get alerted when you’re running low on stock.
                                </p>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-blue-600 text-xl">✔</span>
                                <p className="text-gray-600">
                                    Unlock Your Business Potential!
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section: Image */}
                    <div className="w-full md:w-1/2 p-4 md:p-0 flex justify-end">
                        <img
                            src={inventoryImage} // Use the correct variable here
                            alt="A dashboard for managing inventory with graphs and lists."
                            className="w-full h-auto object-contain shadow-lg md:max-w-[50%]"
                        />
                    </div>
                </div>

            {/* Footer */}
            <footer className="text-center p-6 bg-blue-700 text-white">
                <p>&copy; 2024 Inventa. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
