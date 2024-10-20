import React, { useState } from 'react';
import { db } from '../firebase/firebase'; 
import { collection, addDoc } from 'firebase/firestore';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        description: formData.description,
        timestamp: new Date() // Optional: add a timestamp
      });
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', description: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="bg-blue-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-3 text-center text-blue-700">Contact Us</h1>
        <p className="mb-4 text-center text-gray-600">
          We're here to help! Please fill out the form below to get in touch.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-3">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-1">Description</label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info with Image */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_o7MdL1qhZv03E_gsIgafYdpvs4LsiOwy8XK6T7M_td7nHVg86IKYi2bkfPN09tp0cA&usqp=CAU" // Placeholder image, replace with actual image link
              alt="Contact Us"
              className="rounded-md mb-4"
            />
            <div className="text-center">
              <p className="text-lg font-semibold text-blue-700">Get in touch with us:</p>
              <p className="text-gray-600">Phone: +245 740 000000</p>
              <p className="text-gray-600">Email: support@inventa.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
