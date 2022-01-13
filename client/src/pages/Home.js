import React, { useState } from 'react';
import Adminbar from '../components/home/adminbar';
import Navbar from '../components/home/navbar';
import Dashboard from '../components/home/dashboard';
import Orders from '../components/home/orderhistory';
import Footer from '../components/home/footer';

// import { useQuery } from '@apollo/client';
// import { QUERY_ITEMS } from '../utils/queries';

export default function Home() {
	// const { loading, data } = useQuery(QUERY_ITEMS);
	// const items = data?.items || [];

	const [currentTab, setCurrentTab] = useState('Dashboard');

	const renderTab = () => {
		if (currentTab === 'Dashboard') {
			return (
				<div>
					<Dashboard />
				</div>
			);
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
