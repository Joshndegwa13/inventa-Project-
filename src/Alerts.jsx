// import React, { useState, useEffect } from 'react';

// const Alerts = () => {
//     const [alerts, setAlerts] = useState([]);

//     // Function to fetch alerts from backend
//     const fetchAlerts = async () => {
//         try {
//             const response = await fetch('http://localhost:3001/api/alerts');
//             const data = await response.json();
//             const allAlerts = [...data.lowStockAlerts, ...data.newOrders.map(order => `New order: ${order.productId} (${order.quantity})`)];
//             setAlerts(allAlerts);
//         } catch (error) {
//             console.error('Error fetching alerts:', error);
//         }
//     };

//     // Polling for alerts every 5 seconds
//     useEffect(() => {
//         fetchAlerts(); // Fetch once on component mount
//         const intervalId = setInterval(fetchAlerts, 5000); // Poll every 5 seconds
//         return () => clearInterval(intervalId); // Cleanup on unmount
//     }, []);

//     return (
//         <div className="alerts-container bg-white text-blue-700 p-4 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
//             <h2 className="text-center text-blue-700 font-bold text-xl mb-4">Alerts</h2>
//             {alerts.length > 0 ? (
//                 alerts.map((alert, index) => (
//                     <div
//                         key={index}
//                         className="alert bg-blue-100 text-blue-500 border-l-4 border-blue-500 p-4 mb-4 rounded"
//                     >
//                         {alert}
//                     </div>
//                 ))
//             ) : (
//                 <p className="text-blue-900 text-center">No alerts at this time</p>
//             )}
//         </div>
//     );
// };

// export default Alerts;

import React, { useState, useEffect } from 'react';

const Alerts = () => {
    const [alerts, setAlerts] = useState([]);

    // Function to fetch alerts from backend
    const fetchAlerts = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/alerts');
            const data = await response.json();
            const allAlerts = [
                ...data.lowStockAlerts,
                ...data.newOrders.map(order => `New order: ${order.productId} (${order.quantity})`)
            ];
            setAlerts(allAlerts);
        } catch (error) {
            console.error('Error fetching alerts:', error);
        }
    };

    // Polling for alerts every 5 seconds
    useEffect(() => {
        fetchAlerts(); // Fetch once on component mount
        const intervalId = setInterval(fetchAlerts, 5000); // Poll every 5 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
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
