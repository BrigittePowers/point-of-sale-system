import React, { useState } from 'react';
import Adminbar from '../components/home/adminbar';
import Navbar from '../components/home/navbar';
import Dashboard from '../components/home/dashboard';
import Orders from '../components/home/orderhistory';
import Footer from '../components/home/footer';

export default function Home() {

	const [currentTab, setCurrentTab] = useState('Dashboard');

	const renderTab = () => {
		if (currentTab === 'Dashboard') {
			return <Dashboard />;
		}
		if (currentTab === 'Orders') {
			return <Orders />;
		}

	};

	const handleTabChange = (tab) => setCurrentTab(tab);

	return (
		<div>
			<Adminbar />
			<div className='box'>
				<Navbar
					currentTab={currentTab}
					handleTabChange={handleTabChange}
				/>
				{renderTab()}
				<Footer />
			</div>
		</div>
	);
}
