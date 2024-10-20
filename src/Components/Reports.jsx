import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import SideBar from './SideBar';
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, AreaChart, Area, LineChart, Line } from "recharts";

const userRetentionData = [
	{ name: "Week 1", retention: 100 },
	{ name: "Week 2", retention: 75 },
	{ name: "Week 3", retention: 60 },
	{ name: "Week 4", retention: 50 },
	{ name: "Week 5", retention: 45 },
	{ name: "Week 6", retention: 40 },
	{ name: "Week 7", retention: 38 },
	{ name: "Week 8", retention: 35 },
];

const revenueData = [
	{ month: "Jan", revenue: 4000, target: 3800 },
	{ month: "Feb", revenue: 3000, target: 3200 },
	{ month: "Mar", revenue: 5000, target: 4500 },
	{ month: "Apr", revenue: 4500, target: 4200 },
	{ month: "May", revenue: 6000, target: 5500 },
	{ month: "Jun", revenue: 5500, target: 5800 },
	{ month: "Jul", revenue: 7000, target: 6500 },
];


const productPerformanceData = [
	{ name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
	{ name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
	{ name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
	{ name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
	{ name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];

const channelData = [
	{ name: "Organic Search", value: 4000 },
	{ name: "Paid Search", value: 3000 },
	{ name: "Direct", value: 2000 },
	{ name: "Social Media", value: 2780 },
	{ name: "Referral", value: 1890 },
	{ name: "Email", value: 2390 },
];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F"];


const Reports = () => {
  const navigate = useNavigate();
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");


  return (
    <div className="flex flex-col lg:flex-row lg:h-screen  font-sans ">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center bg-gray-200 p-2 rounded-full w-full lg:w-96">
            <SearchIcon className="text-gray-500" />
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              className="ml-2 flex-1 bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex items-center">
            <NotificationsNoneIcon className="mr-4" />
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white rounded-xl shadow-md text-center font-semibold mb-10">
          <div className="flex flex-row items-center h-[100px]">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-2">
              <DescriptionIcon className="text-red-300" />
            </div>
            <div className="flex flex-col ml-4 text-left">
              <h4 className="text-gray-500">Require Invoice</h4>
              <p className="text-xl font-bold text-gray-600">25</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center mb-2">
              <LocalMallIcon className="text-yellow-300" />
            </div>
            <div className="flex flex-col ml-4 text-left">
              <h4 className="text-gray-500">Require Packing</h4>
              <p className="text-xl font-bold text-gray-600">10</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-2">
              <ShoppingCartIcon className="text-green-300" />
            </div>
            <div className="flex flex-col ml-4 text-left">
              <h4 className="text-gray-500">Need To Ship</h4>
              <p className="text-xl font-bold text-gray-600">33</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-2">
              <ShoppingBagIcon className="text-blue-300" />
            </div>
            <div className="flex flex-col ml-4 text-left">
              <h4 className="text-gray-500">Require Delivery</h4>
              <p className="text-xl font-bold text-gray-600">45</p>
            </div>
          </div>
        </div>

        {/* Line Chart */}
        <motion.div
			className='bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border  mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-500'>Revenue vs Target</h2>
				<select
					className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
					value={selectedTimeRange}
					onChange={(e) => setSelectedTimeRange(e.target.value)}
				>
					<option>This Week</option>
					<option>This Month</option>
					<option>This Quarter</option>
					<option>This Year</option>
				</select>
			</div>

			<div style={{ width: "100%", height: 400 }}>
				<ResponsiveContainer>
					<AreaChart data={revenueData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='month' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Area type='monotone' dataKey='revenue' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
						<Area type='monotone' dataKey='target' stroke='#10B981' fill='#10B981' fillOpacity={0.3} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</motion.div>


        <motion.div
			className='bg-white backdrop-filter backdrop-blur-lg shadow-md rounded-xl p-6 border mb-10 '
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-semibold text-gray-500 mb-4'>Channel Performance</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={channelData}
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{channelData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
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
					<BarChart data={productPerformanceData}>
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
						<Bar dataKey='sales' fill='#8B5CF6' />
						<Bar dataKey='revenue' fill='#10B981' />
						<Bar dataKey='profit' fill='#F59E0B' />
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
