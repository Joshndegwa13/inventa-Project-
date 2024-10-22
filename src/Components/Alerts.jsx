import React, { useState, useEffect } from 'react';

const Alerts = () => {
    const [alerts, setAlerts] = useState([]);

    // Fetch alerts 
    const fetchAlerts = async () => {
        try {
            const response = await fetch('https://inventa-backend.onrender.com/api/sales');
            const data = await response.json();

            // Check if the API returns low stock and new orders
            const lowStockAlerts = data.lowStockAlerts.map(alert => `Low stock for product: ${alert.productId}. Only ${alert.quantity} left.`);
            const newOrderAlerts = data.newOrders.map(order => `New order placed for: ${order.productId} (${order.quantity})`);

            // Combine alerts
            const allAlerts = [...lowStockAlerts, ...newOrderAlerts];
            setAlerts(allAlerts);
        } catch (error) {
            console.error('Error fetching alerts:', error);
        }
    };

    // Polling for alerts every 5 seconds
    useEffect(() => {
        fetchAlerts(); // Fetch once on component mount
        const intervalId = setInterval(fetchAlerts, 5000); // Poll after every 5 seconds
        return () => clearInterval(intervalId); // Clears the interval on unmount
    }, []);

    return (
        <div className="alerts-container bg-white text-blue-700 p-4 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
            <h2 className="text-center text-blue-700 font-bold text-xl mb-4">Alerts</h2>
            {alerts.length > 0 ? (
                alerts.map((alert, index) => (
                    <div
                        key={index}
                        className="alert bg-blue-100 text-blue-500 border-l-4 border-blue-500 p-4 mb-4 rounded"
                    >
                        {alert}
                    </div>
                ))
            ) : (
                <p className="text-blue-900 text-center">No alerts at this time</p>
            )}
        </div>
    );
};

export default Alerts;


// import React from "react";
// import { useAlert } from "../context/AlertContext";

// const Alerts = () => {
//   const { alerts, removeAlert } = useAlert(); 

//   return (
//     <div className="fixed top-4 right-4 z-50">
//       {alerts.map((alert) => (
//         <div
//           key={alert.id}
//           className={`p-4 mb-4 rounded shadow-md ${
//             alert.type === "success" ? "bg-green-500" : "bg-red-500"
//           } text-white flex justify-between items-center`}
//         >
//           <span>{alert.message}</span>
//           <button
//             className="ml-4 bg-transparent border-none text-white font-bold"
//             onClick={() => removeAlert(alert.id)} 
//           >
//             &times;
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Alerts;
