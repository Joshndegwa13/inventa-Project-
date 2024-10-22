import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SideBar from './SideBar';
import { motion } from "framer-motion";
import {  Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, AreaChart, Area, LineChart, Line } from "recharts";

const userRetentionData = [
	{ name: "Week 1", retention: 35 },
	{ name: "Week 2", retention: 38 },
	{ name: "Week 3", retention: 40 },
	{ name: "Week 4", retention: 45 },
	{ name: "Week 5", retention: 50 },
	{ name: "Week 6", retention: 60 },
	{ name: "Week 7", retention: 75},
	{ name: "Week 8", retention: 100 },
];

const Reports = () => {
	 const [metrics, setMetrics] = useState({
    totalSales: 0,
    totalCost: 0,
    totalProfits: 0,
  });
  const navigate = useNavigate();
  const [deliveries, setDeliveries] = useState([]);
  const [salesData, setSalesData] = useState([
    { date: "2023-10-01", total_sales: 15000 },
    { date: "2023-10-02", total_sales: 10000 },
    { date: "2023-10-03", total_sales: 20000 },
  ]);
  const [financeData, setFinanceData] = useState([
        { date: "2023-10-01", total_sales: 15000, expenses: 7000, profits: 8000 },
        { date: "2023-10-02", total_sales: 10000, expenses: 5000, profits: 5000 },
        { date: "2023-10-03", total_sales: 20000, expenses: 10000, profits: 10000 },
        { date: "2023-10-04", total_sales: 18000, expenses: 9000, profits: 9000 },
        { date: "2023-10-05", total_sales: 22000, expenses: 11000, profits: 11000 },
    ]);

  // Fetch data from the backend
    // Fetch finance metrics
    useEffect(() => {
		const fetchLatestFinanceData = async () => {
			try {
				const response = await fetch('http://localhost:5555/api/finances/latest');
				if (!response.ok) throw new Error('Network response was not ok');
				const data = await response.json();

				// Update metrics with fetched data
				setMetrics({
					totalSales: data.total_sales,
					totalCost: data.expenses,
					totalProfits: data.profits,
				});

				// Optionally set financeData for use in charts or other components
				setFinanceData([data]); // Making it an array for potential mapping in charts
				console.log('Fetched finance data:', data); // Debugging log
			} catch (error) {
				console.error('Error fetching finance data:', error);
			}
		};

    // Fetch deliveries
    const fetchDeliveries = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/delivery/");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setDeliveries(data);
      } catch (error) {
        console.error("Error fetching delivery data:", error);
      }
    };

    // Fetch sales data
    const fetchSalesData = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/sales?aggregate=true");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setSalesData(data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    // Fetch finance data
    const fetchFinanceData = async () => {
      try {
        const response = await fetch('http://localhost:5555/api/finances');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const formattedData = data.map(report => ({
          name: report.report_date,
          sales: report.total_sales,
          expenses: report.expenses,
          profits: report.profits,
        }));
        setFinanceData(formattedData);
      } catch (error) {
        console.error('Error fetching finance data:', error);
      }
    };

    // Call all fetch functions
    fetchLatestFinanceData();
    fetchDeliveries();
    fetchSalesData();
    fetchFinanceData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen  font-sans ">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6">
       
        {/* Dashboard Content */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white rounded-xl shadow-md text-center font-semibold mb-10">
  <div className="flex flex-row items-center h-[100px]">
    <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center mb-2">
      <DescriptionIcon className="text-red-300" />
    </div>
    <div className="flex flex-col ml-4 text-left">
      <h4 className="text-gray-500">Total sales</h4>
        <p className="text-xl font-bold text-gray-600">{metrics.totalSales}</p>

    </div>
  </div>
  <div className="flex flex-row items-center">
    <div className="w-24 h-24 rounded-full bg-yellow-50 flex items-center justify-center mb-2">
      <LocalMallIcon className="text-yellow-300" />
    </div>
    <div className="flex flex-col ml-4 text-left">
      <h4 className="text-gray-500">Total Cost</h4>
        <p className="text-xl font-bold text-gray-600">{metrics.totalCost}</p>

    </div>
  </div>
  <div className="flex flex-row items-center">
    <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-2">
      <ShoppingBagIcon className="text-green-300" />
    </div>
    <div className="flex flex-col ml-4 text-left">
      <h4 className="text-gray-500">Total Profits</h4>
        <p className="text-xl font-bold text-gray-600">{metrics.totalProfits}</p>

    </div>
  </div>
  <div className="flex flex-row items-center">
    <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-2">
      <ShoppingCartIcon className="text-blue-300" />
    </div>
    <div className="flex flex-col ml-4 text-left">
      <h4 className="text-gray-500">Delivery Status</h4>
      {deliveries.length > 0 ? (
            deliveries.map((delivery, index) => (
              <p key={index} className="text-xl font-bold text-gray-600">
                {delivery.delivery_status} {/* Display delivery status */}
              </p>
            ))
          ) : (
            <p className="text-md font-bold text-gray-600">No deliveries </p>
          )}
    </div>
  </div>
</div>


        {/* Line Chart */}
       <motion.div
      className='bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className='text-xl font-semibold text-gray-500 mb-4'>Sales Performance</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
            <XAxis dataKey='date' stroke='#9CA3AF' />
            <YAxis domain={[0, 20000]} stroke='#9CA3AF' />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Line type='monotone' dataKey='total_sales' stroke='#8B5CF6' activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>

    <motion.div
      className='bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border '
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className='text-xl font-semibold text-gray-500 mb-4'>Product Performance</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={financeData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
            <XAxis dataKey='name' stroke='#9CA3AF'tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
            <YAxis stroke='#9CA3AF' />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey='sales' fill='#8B5CF6' />
            <Bar dataKey='expenses' fill='#10B981' />
            <Bar dataKey='profits' fill='#F59E0B' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>

    {/* line retension */}
    <motion.div
			className='bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border mt-10'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
		>
			<h2 className='text-xl font-semibold text-gray-500 mb-4'>User Retention</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={userRetentionData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Line type='monotone' dataKey='retention' stroke='#8B5CF6' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
      </div>
    </div>
  );
};



export default Reports;
