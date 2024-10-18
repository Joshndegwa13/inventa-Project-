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
        <form onSubmit={handleSubmit} className="stock-form bg-white text-blue-700 p-4 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h2 className="text-center text-blue-700 font-bold text-xl mb-4">Add Stock Item</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium text-blue-700">Product ID</label>
                <input
                    type="text"
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                    className="border border-blue-300 p-2 rounded w-full"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-blue-700">Product Name</label>
                <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    className="border border-blue-300 p-2 rounded w-full"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-blue-700">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="border border-blue-300 p-2 rounded w-full"
                    required
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
                Add Stock
            </button>
        </form>
    );
};

export default StockForm;
