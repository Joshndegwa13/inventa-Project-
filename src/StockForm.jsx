import React, { useState } from 'react';

const StockForm = () => {
    const [formData, setFormData] = useState({
        productId: '',
        productName: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/stock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Stock item added successfully!');
                setFormData({ productId: '', productName: '', quantity: '' }); // Clear form
            } else {
                alert('Error adding stock item');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding stock');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white text-blue-700 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <h2 className="text-center text-blue-700 font-bold text-2xl mb-6">Add Stock Item</h2>

            <div className="mb-5">
                <label className="block text-sm font-medium text-blue-700 mb-1">Product ID</label>
                <input
                    type="text"
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                    className="border border-blue-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
            </div>

            <div className="mb-5">
                <label className="block text-sm font-medium text-blue-700 mb-1">Product Name</label>
                <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    className="border border-blue-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
            </div>

            <div className="mb-5">
                <label className="block text-sm font-medium text-blue-700 mb-1">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="border border-blue-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 w-full transition duration-200"
            >
                Add Stock
            </button>
        </form>
    );
};

export default StockForm;
