import React, { useState } from 'react';
// import { useMutation } from '@apollo/react-hooks';
import Ticket from '../tabs/ticket';
import Menu from '../tabs/menu';
import Mods from '../tabs/mods';
import food from '../../demofood';

export default function Dashboard() {
	const [currentTab, setCurrentTab] = useState('Menu');

	const handleTabChange = (tab) => setCurrentTab(tab);

	const renderTab = () => {
		if (currentTab === 'Menu') {
			return (
				<Menu
					food={food}
					currentTab={currentTab}
					handleTabChange={handleTabChange}
				/>
			);
		}
		if (currentTab === 'Mods') {
			return (
				<Mods
					food={food}
					currentTab={currentTab}
					handleTabChange={handleTabChange}
				/>
			);
		}
	};

	return (
		<div>
			<Ticket />
			{renderTab()}
		</div>
	);
}
