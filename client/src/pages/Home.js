import React, { useState } from 'react';
import Adminbar from '../components/home/adminbar';
import Dashboard from '../components/home/dashboard';
import Orders from '../components/home/orderhistory';
import Footer from '../components/home/footer';
import { useQuery } from '@apollo/client';
import { QUERY_TICKETS } from '../utils/queries';

export default function Home() {
	const [currentTab, setCurrentTab] = useState('Dashboard');

	const { data, refetch } = useQuery(QUERY_TICKETS);
	const tickets = data?.tickets || [];

	const renderTab = () => {
		if (currentTab === 'Dashboard') {
			return (
				<div>
					<Dashboard />
				</div>
			);
		}
		if (currentTab === 'Orders') {
			return (
				<div>
					<Orders tickets={tickets} />
				</div>
			);
		}
	};

	const handleTabChange = (tab) => setCurrentTab(tab);

	// Query tickets from server

	return (
		<div>
			<Adminbar handleTabChange={handleTabChange} refetch={refetch} />
			{renderTab()}
			<Footer />
		</div>
	);
}
